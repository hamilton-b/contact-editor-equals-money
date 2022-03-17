import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

export const AppBar = () => (
  <MuiAppBar position="static">
    <Container>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact Manager
        </Typography>
      </Toolbar>
    </Container>
  </MuiAppBar>
);
