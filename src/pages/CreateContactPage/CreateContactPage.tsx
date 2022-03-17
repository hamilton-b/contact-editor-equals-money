import { Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContactForm } from "~/components/ContactForm/ContactForm";
import { useContactContext } from "~/contexts/ContactContext";
import { ContactSubmitItem } from "~/models/Contact";
import { isSuccessResponse } from "../../utils/fetcher";
import { toast } from "../../utils/toast";

export const CreateContactPage: React.FC = () => {
  const { createContact } = useContactContext();
  const navigate = useNavigate();

  const handleSubmit = async (
    contact: ContactSubmitItem,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const res = await createContact(contact);

    if (isSuccessResponse(res)) {
      toast("Successfully saved contact", "success");
      navigate(`/edit/${res.data.id}`, { replace: true });
    } else {
      toast("An error occurred when trying to save contact", "error");
      setSubmitting(false);
    }
  };

  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="h5">Create Contact</Typography>
      </Box>

      <Container maxWidth="md">
        <ContactForm onSubmit={handleSubmit} />
      </Container>
    </>
  );
};
