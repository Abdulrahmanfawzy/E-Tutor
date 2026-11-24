
export interface ContactHeroData {
  title: string;
  description: string;
  email: string;
  image: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  image: string;
  isMain?: boolean;
}

export interface ContactInfo {
  description: string;
  address: string[];
  phoneNumbers: string[];
  emails: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactsData {
  hero: ContactHeroData;
  branchesTitle: string;
  branchesDescription: string;
  branches: Branch[];
  contactInfo: ContactInfo;
  mapLocation: string;
}
