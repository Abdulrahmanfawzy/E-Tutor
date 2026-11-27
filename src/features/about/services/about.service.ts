import { aboutMockData } from "../data/about.mock";
import type { AboutData } from "../types/about.types";

export async function getAboutData(): Promise<AboutData> {
  // Replace this mock with the real API request later.
  return aboutMockData;
}