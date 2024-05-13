import { API_URL } from "@/constant";
import axios from "axios";

export const getTafsir = async (
  id: string,
): Promise<TafsirList | undefined> => {
  try {
    const response = await axios.get(`${API_URL}/tafsir/${id}`);
    return response.data;
  } catch {
    return undefined;
  }
};
