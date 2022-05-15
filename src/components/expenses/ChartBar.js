import styles from "./css/ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.total > 0) {
    barFillHeight = (props.value / props.total) * 100 + "%";
  }

  const mouseEnterHandler = (event) => {
    event.currentTarget.childNodes[0].style.opacity = "1";
  };

  const mouseLeaveHandler = (event) => {
    event.currentTarget.childNodes[0].style.opacity = "0";
  };

  return (
    <div className={styles["chart-bar"]}>
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={styles["bar__outer"]}
      >
        {props.value > 0 && (
          <div className={styles["tool-tip"]}>${props.value}</div>
        )}
        <div
          className={styles["bar__inner"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles["bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
