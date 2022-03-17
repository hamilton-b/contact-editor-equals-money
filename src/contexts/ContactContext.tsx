import React, { useEffect, useState } from "react";
import { CircularProgress, Box } from "@mui/material";
import { createCall, deleteCall, getAllCall, updateCall } from "~/endpoints";
import { ErrorPage } from "~/components/ErrorPage";
import { Contact, ContactSubmitItem, ContactMap } from "~/models/Contact";
import { FetchResponse } from "~/models/FetchRequest";
import { isSuccessResponse } from "~/utils/fetcher";
import { reduceContacts } from "~/utils/reduceContacts";

interface ContactContextType {
  data: ContactMap;
  deleteContactById: (id: string) => Promise<FetchResponse>;
  updateContactById: (
    id: string,
    newContact: ContactSubmitItem
  ) => Promise<FetchResponse<Contact>>;
  createContact: (
    contact: ContactSubmitItem
  ) => Promise<FetchResponse<Contact>>;
}

const INITIAL_CONTEXT: ContactContextType = {
  data: {},
  deleteContactById: () => Promise.reject(false),
  updateContactById: () => Promise.reject(false),
  createContact: () => Promise.reject(false),
};

const ContactContext = React.createContext<ContactContextType>(INITIAL_CONTEXT);
ContactContext.displayName = "ContactContext";

export const ContactContextProvider: React.FC = ({ children }) => {
  const [contacts, setContacts] = useState<ContactMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      const res = await getAllCall();

      if (isSuccessResponse(res)) {
        setContacts(reduceContacts(res.data));
      } else {
        setHasError(true);
      }

      setIsLoading(false);
    };

    getContacts();
  }, []);

  const updateContactById = async (
    id: string,
    newContact: ContactSubmitItem
  ) => {
    const res = await updateCall(id, newContact);

    if (isSuccessResponse(res)) {
      setContacts({
        ...contacts,
        [res.data.id]: res.data,
      });
    }

    return res;
  };

  const deleteContactById = async (id: string) => {
    const res = await deleteCall(id);

    if (isSuccessResponse(res)) {
      const { [id]: contactToRemove, ...remaining } = contacts;
      setContacts(remaining);
    }

    return res;
  };

  const createContact = async (newContact: ContactSubmitItem) => {
    const res = await createCall(newContact);

    if (isSuccessResponse(res)) {
      setContacts({
        ...contacts,
        [res.data.id]: res.data,
      });
    }

    return res;
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress disableShrink />
      </Box>
    );
  }

  if (hasError) {
    <ErrorPage
      title="Something went wrong"
      description="We were unable to fetch your contacts, please try again later"
    />;
  }

  return (
    <ContactContext.Provider
      value={{
        data: contacts,
        updateContactById,
        deleteContactById,
        createContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => React.useContext(ContactContext);
