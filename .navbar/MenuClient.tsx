"use client";

import styles from "@/styles/Navbar/Menu.module.scss";

import { ReactNode, useContext } from "react";
import { NavbarContext } from "@/context/NavbarContext";

interface PropsType {
  children: ReactNode;
}

export default function MenuClient(props: PropsType) {
  const { children } = props;

  const { isOpen, defineOpen } = useContext(NavbarContext);

  return (
    <div className={`${styles.menu} ${isOpen && styles.open}`}>{children}</div>
  );
}
