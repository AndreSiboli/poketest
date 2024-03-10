"use client";

import styles from "@/styles/Navbar/Menu.module.scss";

import Container from "../layout/Container";
import Logo from "../layout/Logo";
import Links from "../links/Links";

interface PropsType {
  isOpen: boolean;
}

export default function Menu(props: PropsType) {
  const { isOpen } = props;

  return (
    <div className={`${styles.menu} ${isOpen && styles.open}`}>
      <div>
        <Container>
          <div className={styles.menu_container}>
            <nav className={styles.menu_navigation}>
              <Links text="Home" to="/" />
              <Links text="About" to="/" />
              <Links text="Types" to="/" />
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}
