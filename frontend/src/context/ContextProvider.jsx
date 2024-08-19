import React, { createContext, useState } from "react";

export const MyContext = createContext();
export default function ContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [fetchingError, setFetchingError] = useState("");
  const values = {
    categories,
    setCategories,
    fetchingError,
    setFetchingError,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
