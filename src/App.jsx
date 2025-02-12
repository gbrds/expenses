import './App.css';
import './assets/Expenses.css';
import Expenses from './assets/expenses/Expenses';

const App = () => {
  const expenses = [
    { date: new Date(2024, 1, 16), title: 'New Book', price: 30.99 },
    { date: new Date(2024, 1, 16), title: 'New Stuff', price: 99.99 }
  ];

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
