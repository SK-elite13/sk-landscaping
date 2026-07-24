import React, { createContext, useContext, useState } from "react";

const LeadDialogContext = createContext();

export const LeadDialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadDialog = () => setIsOpen(true);
  const closeLeadDialog = () => setIsOpen(false);

  return (
    <LeadDialogContext.Provider value={{ isOpen, openLeadDialog, closeLeadDialog }}>
      {children}
    </LeadDialogContext.Provider>
  );
};

export const useLeadDialog = () => useContext(LeadDialogContext);
