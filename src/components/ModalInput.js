import React,{useContext} from 'react'
import BetValueContext from '../context/BetValueContext'

const ModalInput = () => {

    const {betValue, setBetValue} = useContext(BetValueContext)

    return (
        <>
            <div className="input-field">
                <label>Total</label>
                <div>${betValue}</div>
            </div>
            <div className="input-field">
                <label>Received</label>
                <input type="text" className="input" />
            </div>
            <div className="input-field">
                <label>Change</label>
                <input type="text" className="input" />
            </div>
        </>
    )
}

export default ModalInput
