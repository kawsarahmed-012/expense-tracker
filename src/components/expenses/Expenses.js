import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../ui/Card";
import styles from "./css/Expenses.module.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const filterByYearHandler = (year) => setFilterYear(year);

  return (
    <Card className={styles.expenses}>
      <ExpenseFilter
        defaultYear={filterYear}
        filterByYearHandler={filterByYearHandler}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
