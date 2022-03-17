import { Contact, ContactMap } from "~/models/Contact";

export const reduceContacts = (input: Contact[]): ContactMap =>
  input.reduce((acc, cur) => {
    acc[cur.id] = cur;

    return acc;
  }, {} as ContactMap);
