import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './expenseItem';
import Card from '../UI/card';
import ExpensesFilter from './expensesFilter';

/*const Expenses = (props) => {
    const filterChangeHandler = (filteredYear) => {
        console.log('Year data in express.js')
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler}/>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id} />
                })
            }
        </Card>
    )
}

export default Expenses*/


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} />
            {filteredExpenses.length === 0 ? (
                <p>No expenses found for {filteredYear}.</p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem expenseData={expense} key={expense.id} />
                ))
            )}
        </Card>
    );
};

export default Expenses