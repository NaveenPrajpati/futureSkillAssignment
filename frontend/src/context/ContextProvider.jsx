import React, { createContext, useState } from "react";

export const MyContext = createContext();
export default function ContextProvider({ children }) {
  const categorie = [
    {
      title: "Branches",
      description:
        "Abstract Branches lets you manage, version, and document your designs in one place.",
    },
    {
      title: "Manage your account",
      description:
        "Configure your account settings, such as your email, profile details, and password.",
    },
    {
      title: "Manage organizations, teams, and projects",
      description:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
    },
    {
      title: "Manage billing",
      description: "Change subscriptions and payment details.",
    },
    {
      title: "Authenticate to Abstract",
      description:
        "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    },
    { title: "Abstract support", description: "Get in touch with a human." },
  ];
  const [categories, setCategories] = useState(categorie);
  const [fetchingError, setFetchingError] = useState("");
  const values = {
    categories,
    setCategories,
    fetchingError,
    setFetchingError,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
