import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

// Función para manejar el fetch
const fetcher = async (url: string, options: RequestInit) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error en la petición");
  }

  return res.json();
};

export const useApi = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<{ data: T | null; error: any; isLoading: boolean; }> => {

  const data = await fetcher(url, options);
 
  return data;
};
