import ExpenseDate from './ExpenseDate'
import './expenseItem.css'
import Card from '../UI/card'
import {useState} from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title)

    const clickHandler = (props) => {
        setTitle(`Updated by click ${title}`)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseData.date}/>
            <div className='expense-item_description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item_price'>{props.expenseData.price}</div>
            </div>
            <button onClick={clickHandler}>Click ME!!</button>
        </Card>
    )
}

export default ExpenseItem