import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/addNew/NewExpense";
import "./App.css";
import { useState } from "react";

const App = () => {
  const dummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 11, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const submitHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onSubmit={submitHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
