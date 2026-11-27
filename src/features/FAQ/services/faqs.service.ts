
import { faqsMockData } from "../data/faqs.mock";
import type { FaqsData } from "../types/faqs.types";

export async function getFaqsData(): Promise<FaqsData> {
  return faqsMockData;
}
