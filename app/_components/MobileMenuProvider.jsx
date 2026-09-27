"use client";

import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext(null);

function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <MobileMenuContext value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </MobileMenuContext>
  );
}

function useMobileMenu() {
  const context = useContext(MobileMenuContext);

  if (context === null) {
    throw new Error("useMobileMenu must be inside the provider");
  }

  return context;
}

export { MobileMenuProvider, useMobileMenu };
