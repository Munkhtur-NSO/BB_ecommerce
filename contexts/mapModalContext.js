"use client";

import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const MapModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ id: null, data: null });

  const openModal = (modalId, data = null) => {
    setModal({ id: modalId, data });
  };

  const closeModal = () => {
    setModal({ id: null, data: null });
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
