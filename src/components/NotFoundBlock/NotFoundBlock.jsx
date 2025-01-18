import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles["not-found"]}>
      <h1>Ничего не найдено:(</h1>
      <p className={styles["description"]}>
        К сожалению, данная страница отсутсвует в нашем магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
