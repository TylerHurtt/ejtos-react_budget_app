import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './currency.css'

const CURRENCY_MAP = {
    '$': 'Dollar',
    '£': 'Pound',
    '€': 'Euro',
    '₹': 'Ruppee'
};

const CurrencyButton = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [ dropdownExpanded, setDropdownExpanded ] = React.useState(false);
    console.log('expanded', dropdownExpanded);

    const handleChangeCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })
    }

    return (
        <div className="btn-group">
            <button
                type="button"
                className="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded={dropdownExpanded}
                onClick={() => setDropdownExpanded(prev => !prev)}
                style={{
                    backgroundColor: '#A2E4B8',
                    padding: '1rem'
                }}
            >
            {`Currency (${currency} ${CURRENCY_MAP[currency]})`}
          </button>
          <ul
            className={`alert-success dropdown-menu ${dropdownExpanded ? 'show': ''}`}
            data-popper-placement="bottom-start"
            style={{
                position: 'absolute',
                inset: '0px auto auto 0px',
                margin: '0px',
                transform: 'translate3d(0px, 59px, 0px)',
                backgroundColor: '#A2E4B8',
                width: '100%'

            }}
          >
            <li className={'currency-item'} value={'$'}
                onClick={() => handleChangeCurrency('$')}
            >{`$ Dollar`}</li>
            <li className={'currency-item'} value={'£'}
                onClick={() => handleChangeCurrency('£')}
            >{`£ Pound`}</li>
            <li className={'currency-item'} value={'€'}
                onClick={() =>handleChangeCurrency('€')}
            >{`€ Euro`}</li>
            <li className={'currency-item'} value={'₹'}
                onClick={() => handleChangeCurrency('₹')}
            >{`₹ Ruppee`}</li>
          </ul>
        </div>
    );
};

export default CurrencyButton;