import styles from "@/styles/pages/pokemon/Types.module.scss";

interface PropsType {
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export default function Types(props: PropsType) {
  const { types } = props;

  function capitalizeString(str: string) {
    return str ? `${str[0].toUpperCase()}${str.substring(1)}` : "";
  }

  return (
    <div className={styles.types}>
      <span>Types:</span>
      <span className={styles.types_wrapper}>
        {types.map((type) => (
          <span
            className={`${styles.types_text} ${styles[type.type.name]}`}
            key={type.type.name}
          >
            {capitalizeString(type.type.name)}
          </span>
        ))}
      </span>
    </div>
  );
}
