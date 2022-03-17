export interface Contact {
  createdAt: string; // iso date
  name: string;
  avatar: string;
  email: string;
  phone: string;
  birthday: string; // iso date
  id: string;
}

export type ContactSubmitItem = Omit<Contact, "id" | "createdAt">;

export type ContactMap = Record<string, Contact>;
