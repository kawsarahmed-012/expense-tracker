import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import styles from "./css/ExpenseList.module.css";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <Card className={styles["no-expense"]}>No expense found!!!</Card>;
  }
  return (
    <div className={styles["expense-list"]}>
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
};

export default ExpenseList;
