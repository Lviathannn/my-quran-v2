import axios from "axios";

export const getDoaList = async (): Promise<DoaList[]> => {
  try {
    const response = await axios.get("https://open-api.my.id/api/doa");
    return response.data;
  } catch {
    return [];
  }
};
