"use client";

import { useQuery } from "@tanstack/react-query";
import { getContactsData } from "../services/contacts.service";

export function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContactsData,
  });
}