import { Typography, Container, Grid, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonForm } from "~/components/ButtonForm";
import { ContactForm } from "~/components/ContactForm";
import { ErrorPage } from "~/components/ErrorPage";
import { useContactContext } from "~/contexts/ContactContext";
import { ContactSubmitItem } from "~/models/Contact";
import { isSuccessResponse } from "../../utils/fetcher";
import { toast } from "../../utils/toast";

export const ViewContactPage: React.FC = () => {
  const { data, updateContactById, deleteContactById } = useContactContext();
  const navigate = useNavigate();
  const params = useParams();

  const id = params.id!;
  const selectedContact = data[id];

  const handleSubmit = async (
    contact: ContactSubmitItem,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const res = await updateContactById(id, contact);

    isSuccessResponse(res)
      ? toast("Successfully saved contact", "success")
      : toast("An error occurred when trying to save contact", "error");

    setSubmitting(false);
  };

  const handleDelete = async (
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const res = await deleteContactById(id);

    if (isSuccessResponse(res)) {
      toast("Successfully deleted contact", "success");
      navigate(`/`, { replace: true });
    } else {
      toast("An error occurred when trying to delete contact", "error");
      setSubmitting(false);
    }

    setSubmitting(false);
  };

  if (!selectedContact) {
    return (
      <ErrorPage
        title="Something went wrong"
        description="We were unable to fetch your contacts, please try again later"
        button={{
          to: "/",
          label: "Back to home",
        }}
      />
    );
  }

  return (
    <Grid container>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="h5">{selectedContact.name}</Typography>
        <ButtonForm onSubmit={handleDelete} color="error">
          Delete
        </ButtonForm>
      </Box>
      <Container maxWidth="md">
        <ContactForm initialContact={selectedContact} onSubmit={handleSubmit} />
      </Container>
    </Grid>
  );
};
