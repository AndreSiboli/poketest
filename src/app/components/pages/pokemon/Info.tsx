import styles from "@/styles/pages/pokemon/Info.module.scss";

interface PropsType {
  title: string;
  info: string | number;
}

export default function Info(props: PropsType) {
  const { title, info } = props;
  return (
    <div className={styles.info}>
      <span className={styles.info_wrapper}>
        <span className={styles.info_title}>{title}:</span>
        <span className={styles.info_info}>{info}</span>
      </span>
    </div>
  );
}
