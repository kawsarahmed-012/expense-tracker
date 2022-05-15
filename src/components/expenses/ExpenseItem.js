import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import styles from "./css/ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <Card className={styles.expense}>
      <ExpenseDate date={props.date} />
      <h2 className={styles["expense__title"]}>{props.title}</h2>
      <div className={styles["expense__amount"]}>${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
