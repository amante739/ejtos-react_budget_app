import React, {useContext} from "react";
import {TiDelete} from "react-icons/ti";
import { AppContext } from "../context/AppContext";


 const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);
    
  const IncreaseAllocation=(name)=>{
    const expense={
        name:name,
        cost:10
    };
    dispatch({
        type:'ADD_EXPENSE',
        payload:expense
    })
  };

  const handlerDeleteExpense=()=>{
    dispatch({
        type:'DELETE_EXPENSE',
        payload:props.id
    })
  }
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.cost}</td>
        <td><button onClick={event=>IncreaseAllocation(props.name)}>+</button></td>
        <td><TiDelete size="1.5em" onClick={handlerDeleteExpense}></TiDelete></td>
    </tr>
  )
};

export default ExpenseItem;
