import { toast as toastify, TypeOptions } from "react-toastify";

const TOAST_DURATION = 3000;

export const toast = (message: string, type: TypeOptions = "info") => {
  toastify(message, {
    position: "top-right",
    autoClose: TOAST_DURATION,
    hideProgressBar: true,
    type,
  });
};
