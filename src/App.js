// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React, { useEffect, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import {BrowserRouter , Routes , Route} from 'react-router-dom'


let DUMMY_EXPENSE = [         //here we cratre array object to pass different input in tag's attribute
    {
        id : "e1",
        date : new Date(2024 , 4 , 20),
        title : "House",
        amount : 300
    },
    {
        id : "e2",
        date : new Date(2024 , 2 , 10),
        title : "Car",
        amount : 1300
    }
    // {
    //     id : "e3",
    //     date : new Date(2022 , 1 , 2),
    //     title : "Bike",
    //     amount : 3000
    // },
    // {
    //     id : "e4",
    //     date : new Date(2024 , 8 , 28),
    //     title : "Bank",
    //     amount : 2300
    // },
];


const App=()=>{

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);


    // useEffect( () => { fetch("http://localhost:8001/apidata").
    //     then((resp) =>{return resp.json()})
    //     .then((apidata) => 
    //         {
    //             console.log(apidata)
    //             setExpenses(apidata)
    //         })
    //     } ,[]);

    // fetch("http://localhost:8001/apidata").
    //     then((resp) =>{return resp.json()})
    //     .then((apidata) => 
    //         {
    //             console.log(apidata)
    //             setExpenses(apidata)
    //         }
    // )

    const newExpenseDataHandler = (addNewDataExpense) => {
        
        const updatedExpense = [addNewDataExpense , ...expenses];

        setExpenses(updatedExpense);

    }

    return (

        <div>
            <NewExpense addNewExpenseData = {newExpenseDataHandler}/>
            <Expenses items={expenses}></Expenses>
        </div>
        
        
        
        
        //here , we ceate 4 tag using same component and give different input by array object
    // <div>
    //     <ExpenseItem     //create attribute in component tag is go in componenet's file in function's parametere 
    //             date = {expense[0].date}
    //             title = "my Own Text"     // we can input direct using string
    //             amount = {expense[0].amount}
    //         ></ExpenseItem>
    //         <ExpenseItem
    //             date = {expense[1].date}
    //             title = {expense[1].title}
    //             amount = {expense[1].amount}
    //         ></ExpenseItem>
    //         <ExpenseItem
    //             date = {expense[2].date}
    //             title = {expense[2].title}
    //             amount = {expense[2].amount}
    //         ></ExpenseItem>
    //         <ExpenseItem
    //             date = {expense[3].date}
    //             title = {expense[3].title}
    //             amount = {expense[3].amount}
    //         ></ExpenseItem>
    // </div>
);
}

export default App;