import { API_URL } from "@/constant";
import axios from "axios";

export const getSurahList = async (): Promise<Surah[]> => {
  try {
    const response = await axios.get(`${API_URL}/surat`);
    return response.data;
  } catch {
    return [];
  }
};
