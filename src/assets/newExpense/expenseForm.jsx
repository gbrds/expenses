import { useState } from 'react'
import './expenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}/>
                </div>
                <div className='new-expense_control'>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01"
                        onChange={priceChangeHandler}
                        value={enteredPrice}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type="date" min="2025-02-12" max="2026-01-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type="submit">Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm