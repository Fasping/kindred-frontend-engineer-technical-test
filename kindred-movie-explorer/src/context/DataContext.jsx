import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("superman");
  const { isLoading, error, data } = useFetch(`&s=${query}`);

  const contextValue = {
    query,
    setQuery,
    isLoading,
    error,
    data,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
