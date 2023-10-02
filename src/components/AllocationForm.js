import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    const [error, setError] = useState('');

    const submitEvent = () => {
        const costValue = parseFloat(cost);

        if (isNaN(costValue)) {
            setError('Please enter a valid number for allocation.');
            // window.alert("Please enter a valid number for allocation.");
            return;
        }

        if (costValue > remaining) {
            setError(`The value cannot exceed remaining funds ${currency}${remaining}`);
            // window.alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
            return;
        }

        setError('');

        const expense = {
            name: name,
            cost: costValue,
        };

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };


return (
    <div className="row">
        <div className="col-md-3">
            <select className="form-control mb-2" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Select your spending excuse...</option>
                <option value="Rent or Mortgage">Rent or Mortgage</option>
                <option value="Transport">Transport</option>
                <option value="Health care">Health care</option>
                <option value="Food">Food</option>
                <option value="Loans">Loans</option>
                <option value="Credit card payments">Credit card payments</option>
                <option value="Savings and Investments">Savings and Investments</option>
                <option value="Personal and Entertainment">Personal and Entertainment</option>
                <option value="Shopping">Shopping</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
        </div>
        <div className="col-md-3" style={{ marginBottom: '35px' }}>
            <select className="form-control mb-2" onChange={(event) => setAction(event.target.value)}>
                <option value="Add">Add Allocation</option>
                <option value="Reduce">Reduce Allocation</option>
            </select>
        </div>
        <div className="col-md-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '37px' }}>
        <span style={{ marginRight: '5px' }}>{currency}</span>
            <input
                type="number"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                placeholder="Enter allocation amount"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <div className="col-md-3" style={{ marginBottom: '35px' }}>
            <button style={{backgroundColor:'#05386B'}} className="btn btn-primary" onClick={submitEvent}>
                Save
            </button>
        </div>
    </div>
);
};

export default AllocationForm;