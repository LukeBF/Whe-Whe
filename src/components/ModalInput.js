import React,{useContext} from 'react'
import BetValueContext from '../context/BetValueContext'
import ReceiveCashContext from '../context/ReceiveCashContext'
import ChangeContext from '../context/ChangeContext'

const ModalInput = () => {

    const {betValue} = useContext(BetValueContext)
    const {cashReceived} = useContext(ReceiveCashContext)
    const {changeAmt, setChangeAmt} = useContext(ChangeContext)

    // const addAmtReceived = (e) => {
        
    //     const numberPadValue = e.target.value
    //     const newReceivedValue = amtReceived + numberPadValue
    //     setAmtReceived(newReceivedValue)
    //     setReceivedAmt(numberPadValue)
    //     setAmtReceived(newReceivedAmt)
    // }

    /**
     * Add onChange to calculate the change when amount received changes
     */

    return (
        <>
            <div className="input-field">
                <label>Total</label>
                <div>${betValue}</div>
            </div>
            
            <div className="input-field">
                <label>Received</label>
                {/* <div>${receivedAmt}</div> */}
                <input type="text" className="input" value={cashReceived} readOnly/>
            </div>    
           
            <div className="input-field">
                <label>Change</label>
                <input type="number" className="input" value={changeAmt} readOnly />
                {/* <input type="number" className="input" readOnly/> */}
                {/* <input type="text" className="input" /> */}
            </div>
        </>
    )
}

export default ModalInput
