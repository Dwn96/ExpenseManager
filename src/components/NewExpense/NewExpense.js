import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = ({addNewExpenseHandler}) => {


    const onSaveExpenseHandler = (enterredExpenseData) => {
        addNewExpenseHandler(enterredExpenseData) 
    }
 

    return ( 
    
    <div className = "new-expense">
    <ExpenseForm onSaveExpenseHandler = {onSaveExpenseHandler} ></ExpenseForm>    
    </div>

    )
}

export default NewExpense