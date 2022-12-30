import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <div
                    style={{
                        backgroundColor: 'green',
                        width: 'min-content',
                        borderRadius: '100%'
                    }}
                >
                    <TiPlus size='1.5em'
                        style={{
                            color: 'white'
                        }}
                        onClick={event=> increaseAllocation(props.name)}
                    />
                </div>
            </td>
            <td>
                <div
                    style={{
                        backgroundColor: 'red',
                        width: 'min-content',
                        borderRadius: '100%'
                    }}
                >
                    <TiMinus size='1.5em'
                        style={{
                            color: 'white'
                        }}
                        onClick={event=> decreaseAllocation(props.name)}
                    />
                </div>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}/></td>
        </tr>
    );
};

export default ExpenseItem;