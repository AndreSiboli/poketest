import styles from "@/styles/Navbar/Menu.module.scss";

import Links from "../links/Links";
import { ReactNode } from "react";
import MenuClient from "./MenuClient";

interface PropsType {
  children: ReactNode;
}

export default function MenuServer() {
  return (
    <MenuClient>
      <nav className={styles.menu_navigation}>
        <Links text="Home" to="/" />
        <Links text="About" to="/" />
        <Links text="Types" to="/" />
      </nav>
    </MenuClient>
  );
}
