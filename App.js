import React, { useState } from 'react';
import './App.css'

// import ExpenseItems from './components/expenseItems'
import Expenses from './components/Expenses';
import NewItem from './components/NewItem';
//import ListItems from './components/list';

let expenses = [
    {
        id : 'e1' ,
        expensetopic : "College Fees",
        expenseamount : 120000,
    },
    {
         id : 'e2',
         expensetopic : "Room Rent",
         expenseamount : 4400,
    },
    {
         id : 'e3',
         expensetopic : "Meal",
         expenseamount : 3500,
    },
    {
        id : 'e4',
        expensetopic : "Bike Fuel",
        expenseamount : 1000,
    }
]
    function App() {
  
    const [newExpense , setNewExpense] = useState(expenses);
    const dataCatcher = (addedData) => {
        const updatedData = [addedData, ...newExpense]
        console.log(updatedData)
        setNewExpense(updatedData)
    }
   
    return (
        <>
        <NewItem newData = {dataCatcher}/>
        <Expenses title={newExpense}/>
       </>
    );
};

export default App;