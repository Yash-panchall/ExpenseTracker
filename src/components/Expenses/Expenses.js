import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

import React from "react";

 
const Expenses=(props)=>{


    return(
        <Card className='expenses'>


            {
                props.items.map(
                    (expens) => (
                        <ExpenseItem 
                            key = {expens.id}
                            date = {new Date(expens.date)}
                            title = {expens.title}
                            amount = {expens.amount} />
                    )
                )
            }

            {/* <ExpenseItem    //create attribute in component tag is go in componenet's file in function's parametere 
                date = {props.items[0].date}
                title = "my Own Text"     // we can input direct using string
                amount = {props.items[0].amount} />
            <ExpenseItem
                date = {props.items[1].date}
                title = {props.items[1].title}
                amount = {props.items[1].amount} />
            <ExpenseItem
                date = {props.items[2].date}
                title = {props.items[2].title}
                amount = {props.items[2].amount} />
            <ExpenseItem
                date = {props.items[3].date}
                title = {props.items[3].title}
                amount = {props.items[3].amount} /> */}
        </Card>
    )
}


export default Expenses;