import React from 'react'

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }

    props.addNewExpenseData(expenseData);

    console.log(expenseData);
  };

  return(
      <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/> 
  )
};

export default NewExpense;