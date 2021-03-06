import React,{useState} from 'react'
import './ExpenseForm.css'

const  ExpenseForm = ({onSaveExpenseHandler}) => {

    const [title, setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
     
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const expenseSubmitHandler = (event) => {
        event.preventDefault();
        const expenseObj = {
            title:title,
            amount:amount,
            date:new Date(date)
        }

        onSaveExpenseHandler(expenseObj)
       
        setDate('')
        setTitle('')
        setAmount('')
    }

    return (
        <form onSubmit = {expenseSubmitHandler}>
            <div className= "new-expense__controls" >
            <div className= "new-expense__control" >
                    <label>Title</label>
                    <input required type="text"  value = {title} onChange = {titleChangeHandler}/>
                </div>
                <div className= "new-expense__control" >
                    <label>Amount</label>
                    <input required type="number" min="0.01" step= "0.01" value = {amount} onChange = {amountChangeHandler}/>
                </div>
                <div className= "new-expense__control" >
                    <label>Date</label>
                    <input required type="date" min="2019-01-01" max = "2022-12-31" value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
