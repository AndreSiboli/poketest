"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Navbar/Index.module.scss";

import Container from "../layout/Container";
import Logo from "../layout/Logo";
import Links from "../links/Links";
import Menu from "./Menu";
import Search from "../form/Search";
import OpenSearch from "./OpenSearch";
import Button from "../buttons/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;

      if (width > 768) {
        setIsOpen(false);
      }
    }

    window.onresize = resize;

    return () => window.removeEventListener("resize", resize);
  }, [isOpen]);

  function defineIsOpen() {
    setIsOpen((prevState) => !prevState);
  }
  function definOpenSearch() {
    setOpenSearch((prevState) => !prevState);
  }

  return (
    <header className={`${styles.header} ${isOpen && styles.open}`}>
      <Container>
        <div className={styles.header_container}>
          {!openSearch ? (
            <>
              <div className={styles.header_wrapper}>
                <div className={styles.header_hamburger} onClick={defineIsOpen}>
                  <div className={styles.trace}></div>
                  <div className={styles.trace}></div>
                  <div className={styles.trace}></div>
                </div>

                <div className={styles.header_logo}>
                  <Logo />
                </div>

                <nav className={styles.header_navigation}>
                  <Links text="Home" to="/" />
                  <Links text="About" to="/" />
                  <Links text="Types" to="/" />
                </nav>
              </div>

              <div className={styles.header_search}>
                <div>
                  <Search />
                </div>
                <div>
                  <OpenSearch handleSearch={definOpenSearch} />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.header_search_bar}>
              <Search />
              {/* <Button text="Cancel" handleButton={definOpenSearch} /> */}
            </div>
          )}
        </div>
      </Container>

      <Menu isOpen={isOpen} />
    </header>
  );
}
