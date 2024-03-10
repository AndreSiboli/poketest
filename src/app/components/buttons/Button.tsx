"use client";

import styles from "@/styles/buttons/Button.module.scss";
import { useState } from "react";

interface PropsType {
  text: string;
  classes?: string;
  loadingText?: string;
  handleButton: () => Promise<void>;
}

export default function Button(props: PropsType) {
  const { text, handleButton, loadingText = "Loading...", classes } = props;
  const [isLoading, setIsLoading] = useState(false);

  async function loading() {
    setIsLoading(true);
    await handleButton();
    setIsLoading(false);
  }

  return (
    <button
      className={`${styles.button} ${classes && styles[classes]}`}
      onClick={loading}
    >
      {!isLoading ? text : loadingText}
    </button>
  );
}
