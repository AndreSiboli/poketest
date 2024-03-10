"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ContextTypes {
  isOpen: boolean;
  defineOpen: () => void;
}

export const NavbarContext = createContext({} as ContextTypes);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function defineOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <NavbarContext.Provider value={{ isOpen, defineOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}
