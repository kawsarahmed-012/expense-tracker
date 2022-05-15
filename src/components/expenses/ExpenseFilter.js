import styles from "./css/ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const changeHandler = (event) => {
    props.filterByYearHandler(event.target.value);
  };

  return (
    <div className={styles["expense-filter"]}>
      <p>Filter By Year</p>
      <select
        className={styles["expense-filter__select"]}
        onChange={changeHandler}
        value={props.defaultYear}
      >
        <option className={styles["expense-filter__option"]} value="2019">
          2019
        </option>
        <option className={styles["expense-filter__option"]} value="2020">
          2020
        </option>
        <option className={styles["expense-filter__option"]} value="2021">
          2021
        </option>
        <option className={styles["expense-filter__option"]} value="2022">
          2022
        </option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
