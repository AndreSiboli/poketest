import Link from "next/link";

import styles from '@/styles/link/Links.module.scss'

interface PropsType {
  text: string;
  to: string;
}

export default function Links(props: PropsType) {
  const { text, to } = props;

  return (
    <Link href={to} className={styles.link}>
      {text}
    </Link>
  );
}
