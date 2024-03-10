import { ReactNode } from "react";
import styles from "@/styles/pages/pokemon/ContainerPokemon.module.scss";

export default function ContainerPokemon({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
