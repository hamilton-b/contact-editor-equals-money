import { ContactSubmitItem, Contact } from "./models/Contact";
import { fetcher } from "./utils/fetcher";

export const createCall = async (newContact: ContactSubmitItem) =>
  fetcher<Contact>({
    path: `/api/v1/contacts`,
    method: "POST",
    body: JSON.stringify(newContact),
  });

export const deleteCall = async (id: string) =>
  fetcher({
    path: `/api/v1/contacts/${id}`,
    method: "DELETE",
  });

export const getAllCall = async () =>
  fetcher<Contact[]>({
    path: `/api/v1/contacts`,
    method: "GET",
  });

export const updateCall = async (id: string, newContact: ContactSubmitItem) =>
  fetcher<Contact>({
    path: `/api/v1/contacts/${id}`,
    method: "PUT",
    body: JSON.stringify(newContact),
  });
