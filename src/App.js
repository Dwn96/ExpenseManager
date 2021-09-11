import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {

  const expenses = [
    {title:'Car Insurance',amount:1243, date: new Date(2021,2,23)},
    {title:'Medical Insurance',amount:41323.34, date: new Date(2021,2,3)},
    {title:'Transport',amount:145.34, date: new Date(2021,2,23)},
    {title:'Meals',amount:7123.24, date: new Date(2021,2,1)},
    {title:'Garage',amount:2123.34, date: new Date(2024,4,30)},

  ]

  return (
    
 
    <div class = "content">
    <h2>Let's get started!</h2>
    <ExpenseItem expenses = {expenses}></ExpenseItem>
  </div>

  );
}

export default App;
