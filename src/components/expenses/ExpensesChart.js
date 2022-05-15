import Card from "../ui/Card";
import ChartBar from "./ChartBar";
import styles from "./css/ExpensesChart.module.css";

const ExpensesChart = (props) => {
  const barInfo = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.filteredExpenses.forEach((expense) => {
    barInfo[expense.date.getMonth()].value += expense.amount;
  });

  const expenseAmounts = barInfo.map((info) => info.value);

  const totalAmount = expenseAmounts.reduce((prev, curr) => {
    return curr + prev;
  });

  return (
    <Card className={styles["expense-chart"]}>
      {barInfo.map((info) => {
        return (
          <ChartBar
            key={info.label}
            total={totalAmount}
            value={info.value}
            label={info.label}
          />
        );
      })}
    </Card>
  );
};

export default ExpensesChart;
