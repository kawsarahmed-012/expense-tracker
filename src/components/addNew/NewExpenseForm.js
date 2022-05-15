import { useState } from "react";
import Button from "../ui/Button";
import styles from "./css/NewExpenseForm.module.css";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeHandler = (event) => {
    if (event.target.type === "text") {
      setTitle(event.target.value);
    } else if (event.target.type === "number") {
      setAmount(event.target.value);
    } else {
      setDate(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      alert("Invalid title.");
      return;
    } else if (amount === "") {
      alert("Invalid amount.");
      return;
    } else if (date === "") {
      alert("Invalid Date.");
      return;
    }

    const newExpense = {
      id: Math.random().toString(),
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSubmit(newExpense);

    setTitle("");
    setAmount("");
    setDate("");

    props.onStopEditing();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control__title"]}>
          <label>Title</label>
          <input
            onChange={changeHandler}
            placeholder="Title"
            value={title}
            type="text"
          />
        </div>
        <div className={styles["form-control__amount"]}>
          <label>Amount</label>
          <input
            pattern="[0-9]+"
            onChange={changeHandler}
            placeholder="Amount"
            value={amount}
            type="number"
            min="0"
            step="0.1"
          />
        </div>
        <div className={styles["form-control__date"]}>
          <label>Date</label>
          <input
            onChange={changeHandler}
            value={date}
            type="date"
            placeholder="mm-dd-yyyy"
            max={new Date().toLocaleString("en-CA").split(",")[0]}
            min="2000-01-01"
          />
        </div>
      </div>
      <div className={styles["action-controls"]}>
        <Button
          onClick={props.onStopEditing}
          className={styles["action-control__cancel"]}
          type="button"
        >
          Cancel
        </Button>
        <Button className={styles["action-control__add"]} type="submit">
          Add Expense
        </Button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
