import {useState} from 'react';
import './App.css';
import Expenses from './assets/expenses/Expenses';
import NewExpense from './assets/newExpense/newExpense';

  const DYMMY_EXPENSES = [
    { id: 'id1', date: new Date(2024, 1, 16), title: 'New Book', price: 30.99 },
    { id: 'id2', date: new Date(2024, 1, 16), title: 'New Stuff', price: 99.99 }
  ];

const App = () => {
  const [expense, setExpenses] = useState(DYMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
    <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </div>
  );
};

export default App;