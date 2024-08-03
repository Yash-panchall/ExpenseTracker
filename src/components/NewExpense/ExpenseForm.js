import React, { useState } from 'react'

import './ExpenseForm.css';

const ExpenseForm = (props) => {

        const [enterTitle , setEnterTitle] = useState('');
        const [enterDate , setEnterDate] = useState('');
        const [enterAmount , setEnterAmount] = useState('');

        const titleChangeHandler = (event) => {
            setEnterTitle(event.target.value)
        };

        const dateChangeHandler = (event) => {
            setEnterDate(event.target.value)
        };

        const amountChangeHandler = (event) => {
            setEnterAmount(event.target.value)
        };

        //after click submit
        const submitHandler = (event) => {
            event.preventDefault();

            const expenseData = {
                title : enterTitle,
                date : new Date(enterDate),
                amount : enterAmount
            };
            
            props.onSaveExpenseData(expenseData);

            console.log(expenseData);

            setEnterTitle('');
            setEnterDate('');
            setEnterAmount('');
        }



    return(

        <div id='formcontainer' className = 'container-fluid'>
            <div id='form' className='row'>
                <div id='form-column' className='col-12 mx-auto p-3 w-50 justify bg-info'>
                    <form onSubmit={submitHandler}>
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Enter Title</label>
                        <input type="text" value={enterTitle} onChange={titleChangeHandler} class="form-control" id="formGroupExampleInput" placeholder="Enter Title"/>
                        </div>

                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Enter Amount</label>
                        <input type="number" value={enterAmount} onChange={amountChangeHandler} class="form-control" id="formGroupExampleInput" placeholder="Enter Amount"/>
                        </div>

                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Enter Date</label>
                        <input type="date" value={enterDate} onChange={dateChangeHandler} class="form-control" id="formGroupExampleInput"/>
                        </div>

                        <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ExpenseForm;