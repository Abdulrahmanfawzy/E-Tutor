
export interface FaqCategory {
  id: number;
  name: string;
}

export interface Faq {
  id: number;
  categoryId: number;
  question: string;
  answer: string;
}

export interface FaqsData {
  categories: FaqCategory[];
  faqs: Faq[];
}
