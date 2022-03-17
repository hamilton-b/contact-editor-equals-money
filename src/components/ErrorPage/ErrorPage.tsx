import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface ErrorPageProps {
  title: string;
  description: string;
  button?: {
    to: string;
    label: string;
  };
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  title,
  description,
  button,
}) => (
  <Container maxWidth="sm">
    <Card>
      <CardContent>
        <Typography align="center" variant="h5" marginBottom={3}>
          {title}
        </Typography>
        <Typography align="center" marginBottom={3}>
          {description}
        </Typography>
      </CardContent>
      {button && (
        <CardActions>
          <Button
            component={Link}
            to={button.to}
            size="large"
            fullWidth
            variant="contained"
          >
            {button.label}
          </Button>
        </CardActions>
      )}
    </Card>
  </Container>
);
