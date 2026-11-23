
import { contactsMockData } from "../data/contacts.mock";
import type { ContactsData } from "../types/contacts.types";

export async function getContactsData(): Promise<ContactsData> {
  return contactsMockData;
}
