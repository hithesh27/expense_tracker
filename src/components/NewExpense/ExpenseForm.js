import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm=(props)=>{
    const [enteredTitle,setenteredTitle]=useState('')
    const [enteredAmount,setenteredAmount]=useState('')
    const [enteredDate,setenteredDate]=useState('')
    const submitHandler=(event)=>{
        event.preventDefault()
        const expensedata={
          title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onsaveExpense(expensedata)
        setenteredTitle('')
        setenteredAmount('')
        setenteredDate('')
    }
    const getback=()=>{
        props.display()
    }
    const titleChangeHandler=(event)=>{
       setenteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setenteredAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setenteredDate(event.target.value)
    }
    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>amount</label>
                <input type='text' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type='date'min='2019-01-01' max='2023-12-30' onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={getback}>Cancel</button>
            <button type='submit'>AddExpense</button>
        </div>
    </form>
    )
}
export default ExpenseForm;