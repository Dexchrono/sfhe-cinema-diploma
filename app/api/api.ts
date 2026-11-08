import type { Data } from "../types/types";
import { API_BASE_URL } from "../constants/constants";

export default async function MyApi(): Promise<Data> {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || data.success !== true || !data.result) {
      throw new Error(`[Backend Data Error] Server responded, but structure is broken or success is false.`);
    }
    return data.result;
  } catch (error: any) {
    throw error;
  }
}
