import { API_URL } from "@/constant";
import axios from "axios";

export const getSurahDetail = async (
  id: string,
): Promise<SurahDetail | undefined> => {
  try {
    const response = await axios.get(`${API_URL}/surat/${id}`);
    return response.data;
  } catch {
    return undefined;
  }
};
