import React from "react";
import { Container, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppBar } from "./components/AppBar";
import { ContactContextProvider } from "./contexts/ContactContext";
import { CreateContactPage } from "./pages/CreateContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ViewContactPage } from "./pages/ViewContactPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box>
        <ToastContainer />
        <AppBar />
        <Box mb={1} />
        <Container>
          <ContactContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreateContactPage />} />
              <Route path="/edit/:id" element={<ViewContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ContactContextProvider>
        </Container>
      </Box>
    </BrowserRouter>
  );
};
