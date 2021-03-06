import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpensesFilter from './ExpensesFilter'

export default function ExpenseItem({expenses}) {
 

    return (
        <div>
        <ExpensesFilter></ExpensesFilter>

         {expenses.map((expense)=>(           

            <div className="expense-item">

           <ExpenseDate date = {expense.date}></ExpenseDate>

            <div className = "expense-item__description">

            <h2>{expense.title}</h2>
            <div className = "expense-item__price">${expense.amount}</div>

            </div>

        </div>
   
        ))}
       </div>
    )
}
