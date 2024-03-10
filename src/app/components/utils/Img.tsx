import { CSSProperties } from "react";
import styles from "@/styles/pages/pokemon/ContainerPokemon.module.scss";
import Image from "next/image";

import errImg from "@/assets/err.svg";

interface PropsType {
  src: string | null;
  alt?: string;
  style?: CSSProperties;
}

export default function Img(props: PropsType) {
  const { src = "", alt = "", style = {} } = props;

  return (
    <Image
      src={src ? src : ""}
      alt={alt}
      style={{ ...style, objectFit: "cover" }}
      fill
      sizes="100vw"
    />
  );
}
