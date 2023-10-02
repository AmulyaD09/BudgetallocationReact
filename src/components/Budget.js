import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { budget,currency,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [validationMessage] = useState('');

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
            if (updatedBudget) {
                dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
                setNewBudget(updatedBudget);
            } 
    };

  

    const budgetStyle = {
        display: 'flex',
        backgroundColor: '#ccc',
        padding: '23px',
        borderRadius: '5px',
        marginTop:'-6px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
        marginRight: '10px',
    };

    const currencyStyle = {
        fontSize: '20px',
        marginRight:'5px', 
    };

    const inputStyle = {
        fontSize: '15px',
        marginRight: '10px',
        flex: 1,
    };

    const validationDivStyle = {
        marginTop: '10px', 
    };
    

    return (
        <div style={budgetStyle}>
            <span style={labelStyle}>Budget:</span>
            <span style={currencyStyle}>{currency}</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={inputStyle}></input>
                {newBudget !== budget && validationMessage && (
                    <div className="text-danger" style={validationDivStyle}>{validationMessage}</div>
                )}
            </div>
        </div>
    );
};

export default Budget;
