import axios, { AxiosResponse } from "axios";

export interface bookData {
  id: number;
  title: string;
  discountRate: number;
  price: number;
}

export const fetchDataFromServer = async (
  booksLength: number
): Promise<bookData[]> => {
  try {
    console.log("booksLength", booksLength);
    const response: AxiosResponse<bookData[]> = await axios.get(
      "http://127.0.0.1:8080/books",
      {
        params: {
          offset: booksLength,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
