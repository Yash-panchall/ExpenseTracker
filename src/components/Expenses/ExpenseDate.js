import './ExpenseDate.css';
import React from "react";


const ExpenseDate=(props)=>{

    let day = props.date.toLocaleString('en-US' , {day: "2-digit"});
    let year =props.date.getFullYear();
    let month  = props.date.toLocaleString('en-US' , {month : "long"});

    // const Wrapper = styled.section`
    //     .expense-date{
    //         display: flex;
    //         flex-direction: column;
    //         width: 5.5rem;
    //         height: 5.5rem;
    //         border: 1px solid rgb(94, 69, 69);
    //         background-color:cornsilk;
    //         color: black;
    //         border-radius: 12px;
    //         align-items: center;
    //         justify-content: center;
    // }
    // `

    // return(
    // <Wrapper>
    //     <div className='expense-date'>
    //         <div>{ day }</div>
    //         <div>{ month }</div>
    //         <div>{ year }</div>
    //     </div>
    // </Wrapper>
    // )


    return(
            <div className='expense-date'>
                <div>{ day }</div>
                <div>{ month }</div>
                <div>{ year }</div>
            </div>
        );


}

export default ExpenseDate;