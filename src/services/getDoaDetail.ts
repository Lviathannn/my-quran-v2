import axios from "axios";

export const getDoaDetail = async (
  id: string,
): Promise<DoaList | undefined> => {
  try {
    const response = await axios.get(`https://open-api.my.id/api/doa/${id}`);
    return response.data;
  } catch {
    return undefined;
  }
};
