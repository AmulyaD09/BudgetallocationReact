import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
    
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };
    
    const buttonStyle = {
        backgroundColor: '#05386B', 
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        marginLeft: '29px',
        outline: 'none',
    };

    const minusButtonStyle = {
        backgroundColor: '#05386B', 
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        marginLeft: '29px',
        outline: 'none',
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        {/* <td>{currency}{props.cost}</td> */}
        <td><button style={buttonStyle} onClick={event=> increaseAllocation(props.name)}> <AiOutlinePlus size={20} /></button></td>
        <td><button style={minusButtonStyle} onClick={event=> decreaseAllocation(props.name)}><AiOutlineMinus size={20} /></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense} style={{marginLeft:'18px'}}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
