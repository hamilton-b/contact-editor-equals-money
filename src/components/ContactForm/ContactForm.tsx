import * as React from "react";
import {
  FormHelperText,
  FormControl,
  TextField,
  Grid,
  Avatar,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import gbLocale from 'date-fns/locale/en-GB';
import { Formik } from "formik";
import { object } from "yup";
import { Contact, ContactSubmitItem } from "~/models/Contact";
import { validators } from "../../utils/validators";

interface ContactFormProps {
  initialContact?: Contact;
  onSubmit?: (
    contact: ContactSubmitItem,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialContact,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={{
        name: initialContact?.name || "",
        avatar: initialContact?.avatar || "",
        email: initialContact?.email || "",
        phone: initialContact?.phone || "",
        birthday: initialContact
          ? new Date(initialContact.birthday)
          : new Date(),
      }}
      validationSchema={object({
        name: validators.name,
        avatar: validators.avatar,
        phone: validators.phone,
        birthday: validators.birthday,
        email: validators.email,
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit &&
          onSubmit(
            {
              ...values,
              birthday: values.birthday.toISOString(),
            },
            setSubmitting
          );
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  label="Name"
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={Boolean(touched.name && errors.name)}
                />
                {touched.name && errors.name && (
                  <FormHelperText error>{errors.name}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  label="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  label="Phone Number"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  error={Boolean(touched.phone && errors.phone)}
                />
                {touched.phone && errors.phone && (
                  <FormHelperText error>{errors.phone}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={gbLocale}>
                  <DatePicker
                    label="Date of Birth"
                    value={values.birthday}
                    onChange={(date) => setFieldValue("birthday", date, true)}
                    renderInput={(params) => (
                      <TextField {...params} onBlur={handleBlur("birthday")} />
                    )}
                  />
                </LocalizationProvider>
                {touched.birthday && errors.birthday && (
                  <FormHelperText error>{errors.birthday}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2} justifyContent="center" display="flex">
              <Avatar src={values.avatar} sx={{ width: 70, height: 70 }} />
            </Grid>
            <Grid item xs={12} md={10}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  label="Avatar URL"
                  value={values.avatar}
                  onChange={handleChange("avatar")}
                  onBlur={handleBlur("avatar")}
                  error={Boolean(touched.avatar && errors.avatar)}
                />
                {touched.avatar && errors.avatar && (
                  <FormHelperText error>{errors.avatar}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                fullWidth
                size="large"
                variant="contained"
              >
                Save Changes
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
