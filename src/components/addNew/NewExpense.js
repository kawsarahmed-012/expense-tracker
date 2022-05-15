import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import Card from "../ui/Card";
import styles from "./css/NewExpense.module.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  const submitHandler = (newExpense) => {
    props.onSubmit(newExpense);
  };

  return isEditing ? (
    <Card className={styles["new-expense"]}>
      <NewExpenseForm
        onSubmit={submitHandler}
        onStopEditing={stopEditingHandler}
      />
    </Card>
  ) : (
    <Card className={styles["new-expense"]}>
      <button onClick={startEditingHandler} type="button">
        Add Expense
      </button>
    </Card>
  );
};

export default NewExpense;
