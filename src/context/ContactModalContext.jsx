import React, { createContext, useContext, useState, memo } from "react";

const ContactModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ContactModalProvider = memo(({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
});

export const useContactModal = () => useContext(ContactModalContext);
