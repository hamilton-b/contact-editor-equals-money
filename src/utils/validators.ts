import { string, date } from "yup";

const PHONE_REGEX =
  /^\s*(([+]\s?\d[-\s]?\d|0)?\s?\d([-\s]?\d){9}|[(]\s?\d([-\s]?\d)+\s*[)]([-\s]?\d)+)\s*$/;

export const validators = {
  name: string().required("Please enter a name"),
  phone: string()
    .matches(PHONE_REGEX, "Please enter a valid phone number format")
    .required("Please enter a phone number"), // Would put a format but there are lots of different formats in the response
  birthday: date()
    .max(new Date(), "Pl`ease enter a date in the past")
    .required("Please enter a date"),
  avatar: string().url("Please enter a valid URL for your avatar"),
  email: string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
};
