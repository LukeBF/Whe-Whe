import React,{useContext} from 'react'
import CurrencyValuesContext from '../context/CurrencyValuesContext'
import BetValueContext from '../context/BetValueContext'

const CurrencyButtons = (props) => {

    const {currencyValues} = useContext(CurrencyValuesContext)
    const {betValue, setBetValue} = useContext(BetValueContext)
    console.log(currencyValues)

    const addCashBet = (e) => {

        const cashValue = parseInt(e.target.value)
        const newBetAmt = betValue + cashValue
        setBetValue(newBetAmt)

    }

    return (
        <>
            <div>
                <button onClick={addCashBet} value={props.value}>{props.value}</button>
            </div>
            {/* <div><button onClick={dollarValue}>$5</button></div> */}
            {/* <div><button onClick={dollarValue}>$10</button></div> */}
            {/* <div><button onClick={dollarValue}>$20</button></div> */}
        </>
    )
}

export default CurrencyButtons
