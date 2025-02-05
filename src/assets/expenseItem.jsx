import ExpenseDate from './ExpenseDate'
import './expenseItem.css'

const ExpenseItem = (props) => {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.data.date}/>
            <div className='expense-item_description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item_price'>{props.data.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem