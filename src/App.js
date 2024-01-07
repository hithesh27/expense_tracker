import React,{useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DummyExpense=[
    {
        id:'1',
        title:'aoiletpaper',
        amount:100,
        date: new Date(2023,2,15),
    },
    {
        id:'2',
        title:'bew_TV',
        amount:200,
        date: new Date(2021,3,15),
    },
    {
        id:'3',
        title:'carket',
        amount:300,
        date: new Date(2020,4,15),
    },
    {
        id:'4',
        title:'dobile_repair',
        amount:400,
        date: new Date(2019,5,15),
    }
]
function App(){
    const [expense,setcurrExpense]=useState(DummyExpense)
    const gettheexpense=(Newexpense)=>{
        setcurrExpense((previousExpense)=>{
           return [Newexpense,...previousExpense]
        })
    }
    return(
        <div>   
            <NewExpense expense={gettheexpense}></NewExpense>
            <Expenses expense={expense}></Expenses>
        </div>
    );
}
export default App