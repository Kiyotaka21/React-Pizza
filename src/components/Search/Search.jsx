import { useCallback, useContext, useState } from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

export function Search() {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles["search"]}>
      <img
        className={styles["icon"]}
        src="./public/search.svg"
        alt="Иконка поиска"
      />
      <input
        value={value}
        onChange={onChangeInput}
        className={styles["input"]}
        type="text"
        placeholder="Поиск пиццы"
      />
    </div>
  );
}
