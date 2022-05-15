import Card from "../ui/Card";
import styles from "./css/ExpenseDate.module.css";

const ExpenseDate = (props) => {
  return (
    <Card className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>
        {props.date.toLocaleString("en-US", { month: "short" })}
      </div>
      <div className={styles["expense-date__year"]}>
        {props.date.getFullYear()}
      </div>
      <div className={styles["expense-date__day"]}>
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </Card>
  );
};

export default ExpenseDate;
