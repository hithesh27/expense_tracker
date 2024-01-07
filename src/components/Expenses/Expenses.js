import React,{useState} from 'react'
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props){
    const [year,setYear]=useState('ALL');
    const ChangeYear=(changedYear)=>{
        setYear(changedYear)
    }
    const filteredexpense=props.expense.filter(function(e){
        if(year==='ALL') return 1
        else {
            return (String(e.date.getFullYear())===year)
        }
    }
    )
    return (
        <div className='expenses'>
        <ExpensesFilter yearExpense={ChangeYear} initialYear={year}></ExpensesFilter>
        <ExpensesChart expenses={filteredexpense}></ExpensesChart>
            <ExpensesList expensesyear={filteredexpense}></ExpensesList>
        </div>
    )
}
export default Expenses; 