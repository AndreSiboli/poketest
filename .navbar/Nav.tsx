"use client";

import { ReactNode, useContext, useState } from "react";
import { NavbarContext, NavbarProvider } from "@/context/NavbarContext";
import styles from "@/styles/Navbar/Index.module.scss";

export default function Nav({ children }: { children: ReactNode }) {
  const { isOpen, defineOpen } = useContext(NavbarContext);

  return (
    <>
      <header className={`${styles.header} ${isOpen && styles.open}`}>
        {children}
      </header>
    </>
  );
}
