import React,{useState} from 'react'
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
const NewExpense=(props)=>{
    const newExpense=(expenseDatas)=>{
      const expenseobj={
            id:Math.random().toString(),
            ...expenseDatas,
        }
        props.expense(expenseobj)
        setcurdisplay(<div><button type='button' onClick={setit}>Add Expense</button></div>)
    }
    const display=()=>{
        setcurdisplay(<div><button type='button' onClick={setit}>Add Expense</button></div>)
    }
    const [curdisplay,setcurdisplay]=useState(<div><button type='button' onClick={setit}>Add Expense</button></div>)
    function setit(){
        setcurdisplay(<ExpenseForm onsaveExpense={newExpense} display={display}></ExpenseForm>)
        }
    return (
        <div className='new-expense'>
            {curdisplay}
        </div>
    )
}
export default NewExpense