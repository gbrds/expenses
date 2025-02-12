import ExpenseDate from './ExpenseDate'
import './expenseItem.css'
import Card from '../UI/card'
import {useState} from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title)

    const clickHandler = (props) => {
        console.log('Clicked')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}/>
            <div className='expense-item_description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item_price'>{props.data.price}</div>
            </div>
            <button onClick={clickHandler}>Click ME!!</button>
        </Card>
    )
}

export default ExpenseItem