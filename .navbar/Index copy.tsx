import { useContext } from "react";
import { NavbarContext, NavbarProvider } from "@/context/NavbarContext";
import styles from "@/styles/Navbar/Index.module.scss";

import Logo from "@/app/components/layout/Logo";
import Container from "@/app/components/layout/Container";
import Links from "@/app/components/links/Links";
import Client from "./Client";

interface PropsType {
  isOpen: boolean;
}

export default function Navbar() {
  // const { isOpen } = props;

  // console.log(isOpen);

  return (
    <NavbarProvider>
      <Client>
        <header className={`${styles.header} ${isOpen && styles.open}`}>
          <Container>
            <div className={styles.header_container}>
              <Logo />

              <nav className={styles.header_navigation}>
                <Links text="Home" to="/" />
                <Links text="About" to="/" />
                <Links text="Types" to="/" />
              </nav>

              <div></div>
            </div>
          </Container>
        </header>
      </Client>
    </NavbarProvider>
  );
}
