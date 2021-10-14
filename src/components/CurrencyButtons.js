import React,{useContext} from 'react'
import CurrencyValuesContext from '../context/CurrencyValuesContext'
import BetValueContext from '../context/BetValueContext'

const CurrencyButtons = (props) => {

    const {betValue, setBetValue} = useContext(BetValueContext)

    const appendValue = (e) => {
        const cashValue = e.target.value
        const totalBet = betValue + parseInt(cashValue)
        setBetValue(totalBet)
    }

    return (
        <>
            <div>
                <button onClick={appendValue} value={props.value}>{props.value}</button>
            </div>
            {/* <div><button onClick={dollarValue}>$5</button></div> */}
            {/* <div><button onClick={dollarValue}>$10</button></div> */}
            {/* <div><button onClick={dollarValue}>$20</button></div> */}
        </>
    )
}

export default CurrencyButtons
