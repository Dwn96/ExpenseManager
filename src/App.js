import React,{useState} from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {title:'Car Insurance',amount:1243, date: new Date(2021,2,23)},
  {title:'Medical Insurance',amount:41323.34, date: new Date(2021,2,3)},
  {title:'Transport',amount:145.34, date: new Date(2021,2,23)},
  {title:'Meals',amount:7123.24, date: new Date(2021,2,1)},
  {title:'Garage',amount:2123.34, date: new Date(2024,4,30)},

]




const App = () => {


  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (enterredExpenseData) => {
    setExpenses((prevExpenses)=>{
      return [enterredExpenseData,...prevExpenses]
    })
    
  }

  return (
    
 
    <div className = "content">
     <NewExpense addNewExpenseHandler = {addNewExpenseHandler}></NewExpense>
     <ExpenseItem expenses = {expenses}></ExpenseItem>
   
  </div>

  );
}

export default App;
