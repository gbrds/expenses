import './expenseItem.css'

const ExpenseItem = (props) => {
    
    console.log(props)

    return (
        <div className='expense-item'>
            <div>{props.date.toString()}</div>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>{props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem