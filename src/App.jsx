import './App.css';
import './assets/expenses/Expenses.css';
import Expenses from './assets/expenses/Expenses';
import NewExpense from './assets/newExpense/newExpense';

const App = () => {
  const expenses = [
    { date: new Date(2024, 1, 16), title: 'New Book', price: 30.99 },
    { date: new Date(2024, 1, 16), title: 'New Stuff', price: 99.99 }
  ];

const addExpenseHandler = (expense) => {
  console.log('in app.js')
  console.log(expense)
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
