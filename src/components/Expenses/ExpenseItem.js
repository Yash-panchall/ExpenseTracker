import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import './ExpenseItem.css';

// import React , {useState} from "react";

const ExpenseItem=(props)=>{   
    //here in props object we get components tag attribute which is defined in App.js file & we can able to use as a Object property using (.)

//   1. When we dont create date component then use it
    // // it's create for display date in systametic manner
    // let day = props.date.toLocaleString('en-US' , {day: "2-digit"});
    // let year =props.date.getFullYear();
    // let month  = props.date.toLocaleString('en-US' , {month : "long"});



                    // <------------------- useState ------------------>

                    
    // const [newTitle , setNewTitle]= useState("");

    // const changeHandler = (evn)=> {
    //     setNewTitle(evn.target.value)
    // };

    // const [title , setTitle]= useState(props.title);

    // const clickHandler=()=>{
    //     setTitle(newTitle)
    // };

    return(
        <Card className='expense-item'>
            <div className='row'>
                <div className='col-3'>
                    <ExpenseDate date = {props.date}/>
                </div>
                <div className='col-4 expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </div>


            {/* both line for learn useState only */}
            {/* <input type='text' value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>ChangeTitle</button> */}
        </Card>
    );
}

export default ExpenseItem;