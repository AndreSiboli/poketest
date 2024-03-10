"use client";

import { useContext } from "react";
import styles from "@/styles/form/Search.module.scss";

import { SearchContext } from "@/context/Search";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const { inputRef, submitSearch } = useContext(SearchContext);

  async function doAction() {
    console.log("clicked");
    await submitSearch();
  }

  return (
    <div className={styles.search}>
      <input type="text" className={styles.search_input} ref={inputRef} />
      <button onClick={doAction} className={styles.search_button}>
        <FaSearch />
      </button>
    </div>
  );
}
