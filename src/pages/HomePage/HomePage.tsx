import { Typography, Grid, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ContactCard } from "~/components/ContactCard";
import { useContactContext } from "~/contexts/ContactContext";

export const HomePage: React.FC = () => {
  const { data } = useContactContext();

  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="h5">Contact List</Typography>
        <Button variant="outlined" size="large" component={Link} to="/create">
          Create new
        </Button>
      </Box>

      <Grid container flexWrap="wrap" spacing={2}>
        {Object.values(data).map((contact) => (
          <Grid item xs={12} sm={6} md={4} key={contact.id}>
            <ContactCard {...contact} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
