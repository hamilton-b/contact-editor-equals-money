import React from "react";
import { ErrorPage } from "~/components/ErrorPage";

export const NotFoundPage: React.FC = () => (
  <ErrorPage
    title="Page not found"
    description="Oops, it looks like this page does not exist"
    button={{
      to: "/",
      label: "Back to home",
    }}
  />
);
