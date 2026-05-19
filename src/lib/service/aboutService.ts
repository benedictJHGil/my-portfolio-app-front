import { fetchAbout } from "@/lib/api/about";
import { mapToBusinessCard, mapToAbout } from "@/lib/mapper/about";

import { AboutPageResponse } from "@/types/api/about";
import { BusinessCardData, AboutData } from "@/types/ui/about";

let cachedData: AboutPageResponse | null = null;

async function getCachedAboutData(): Promise<AboutPageResponse> {
  if (!cachedData) {
    cachedData = await fetchAbout();
  }
  return cachedData;
}

export async function getBusinessCardData(): Promise<BusinessCardData> {
  const data = await getCachedAboutData();
  return mapToBusinessCard(data);
}

export async function getAboutPageData(): Promise<AboutData> {
  const data = await getCachedAboutData();
  return mapToAbout(data);
}