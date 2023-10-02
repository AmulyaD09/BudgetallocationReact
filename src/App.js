import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import CurrencyDropdown from './components/CurrencyDropdown';

const App = () => {
    return (
        <AppProvider >
            <div className='container' >
                <h1 className='mt-3' style={{fontSize:'45px',marginBottom:'35px',marginLeft:'5px'}}>SpendSmart - Budget planner to track your monthly expenses</h1>
                <div className='row mt-3' >
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <CurrencyDropdown />
                    </div>
                </div>
                {/* <h3 className='mt-3'>Allocation</h3> */}
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
