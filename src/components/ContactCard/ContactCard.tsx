import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Contact } from "~/models/Contact";

export const ContactCard: React.FC<Contact> = ({ avatar, name, id }) => (
  <Card>
    <CardMedia component="img" height="140" image={avatar} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        component={Link}
        to={`/edit/${id}`}
        fullWidth
        size="large"
        variant="contained"
        color="primary"
      >
        View / Edit
      </Button>
    </CardActions>
  </Card>
);
