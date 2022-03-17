import React from "react";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { Formik } from "formik";
interface ButtonFormProps extends Pick<LoadingButtonProps, "color"> {
  onSubmit: (setSubmitting: (isSubmitting: boolean) => void) => void;
}

export const ButtonForm: React.FC<ButtonFormProps> = ({
  onSubmit,
  children,
  ...buttonProps
}) => (
  <Formik
    initialValues={{}}
    onSubmit={(_, { setSubmitting }) => {
      onSubmit(setSubmitting);
    }}
  >
    {({ handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <LoadingButton
          type="submit"
          loading={isSubmitting}
          fullWidth
          size="large"
          variant="contained"
          {...buttonProps}
        >
          {children}
        </LoadingButton>
      </form>
    )}
  </Formik>
);
