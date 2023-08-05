import React from 'react'
import axios, { AxiosResponse } from "axios";

export interface bookData {
  id: number;
  title: string;
  discountRate: number;
  price: number;
}

export const fetchDataFromServer = async (): Promise<bookData[]> => {
  try {
    const response: AxiosResponse<bookData[]> = await axios.get(
      "http://127.0.0.1:8080/books", { withCredentials: false }
    );
    return response.data;
  } catch (error) {
    // Handle error if needed
    console.log(error);
    throw error;
  }
};
