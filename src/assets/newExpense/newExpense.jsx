import ExpenseForm from "./expenseForm"
import './newExpenses.css'
import React, { useState } from "react";

const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsFormVisible(false);
    }
    
    const showForm = () => {
        setIsFormVisible(true);
    };

    const hideForm = () => {
        setIsFormVisible(false);
    };

    return(
        <div className="new-expense">
            {!isFormVisible && (
                <button onClick={showForm}>Add New Expense</button>
            )}
            {isFormVisible && (
                <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={hideForm}
                />

            )}
        </div>
    )
}

export default NewExpense