import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);

    const handleChange = ({ target }) => {
        const { value } = target;
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        })
    }

    return (
        <div className='alert alert-secondary'>
            <label>{`Budget: ${currency}`}</label>
            <input
                type={'number'}
                value={budget}
                onChange={handleChange}
            />
        </div>
    );
};

export default Budget;