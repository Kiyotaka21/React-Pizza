import { useContext } from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

export function Search() {
    const {searchValue, setSearchValue} = useContext(SearchContext)

  return (
    <div className={styles["search"]}>
      <img
        className={styles["icon"]}
        src="./public/search.svg"
        alt="Иконка поиска"
      />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles["input"]}
        type="text"
        placeholder="Поиск пиццы"
      />
    </div>
  );
}
