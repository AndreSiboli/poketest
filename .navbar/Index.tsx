import { useContext } from "react";
import { NavbarContext, NavbarProvider } from "@/context/NavbarContext";
import styles from "@/styles/Navbar/Index.module.scss";

import Logo from "@/app/components/layout/Logo";
import Container from "@/app/components/layout/Container";
import Links from "@/app/components/links/Links";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <div className={styles.header_container}>
          <Logo />

          <nav className={styles.header_navigation}>
            <Links text="Home" to="/" />
            <Links text="About" to="/" />
            <Links text="Types" to="/" />
          </nav>

          <div></div>

          <div className={styles.header_hamburger} onClick={defineIsOpen}>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
            <div className={styles.trace}></div>
          </div>
        </div>
      </Container>
    </Nav>

    // <header className={`${styles.header} ${isOpen && styles.open}`}>

    // </header>
  );
}
