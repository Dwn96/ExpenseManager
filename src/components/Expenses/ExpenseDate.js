import React,{useState} from 'react'
import './ExpenseDate.css'

function ExpenseDate({date}) {
    const month = date.toLocaleString('en-US',{month:'long'})
    //const day =  date.toLocaleString('en-US',{day:'2-digit'})
    const year = date.getFullYear()

    const [day, setDay] = useState(date.toLocaleString('en-US',{day:'2-digit'}))

    const increamentDay = () => {
        setDay(parseInt(day) + 1)
    }
   
    return (
        

        <div className = "expense-date" >

        <div className="expense-date__month">{month}</div>
        <div  className="expense-date__year">{year}</div>
        <div  className="expense-date__day" onClick = {increamentDay}>{day}</div>
        
      
        </div>
            
        
    )
}

export default ExpenseDate
