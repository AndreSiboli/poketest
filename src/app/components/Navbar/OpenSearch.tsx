import styles from "@/styles/Navbar/OpenSearch.module.scss";

import { FaSearch } from "react-icons/fa";

interface PropsType {
  handleSearch: () => void;
}

export default function OpenSearch(props: PropsType) {
  const { handleSearch } = props;

  return (
    <button className={styles.button} onClick={handleSearch}>
      <FaSearch />
    </button>
  );
}
