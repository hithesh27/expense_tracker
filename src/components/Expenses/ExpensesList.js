import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'
const ExpensesList=(props)=>{
    if(props.expensesyear.length===0){
      return (
        <h2 className='expenses-list__fallback'>No results found</h2>
      )
    }
    return (
       <ul className="expenses-list">
        {props.expensesyear.map((eachExpense)=>(
        <ExpenseItem 
        key={eachExpense.id}
        title={eachExpense.title}
        amount={eachExpense.amount}
        date={eachExpense.date}>
        </ExpenseItem>
        ))
        }
       </ul>
        )
}
export default ExpensesList