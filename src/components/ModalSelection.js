import React,{useState, useContext} from 'react'
import ReceiveCashContext from '../context/ReceiveCashContext'
import BetValueContext from '../context/BetValueContext'
import ChangeContext from '../context/ChangeContext'

const ModalSelection = () => {

    const {cashReceived, setCashReceived} = useContext(ReceiveCashContext)
    const {betValue, setBetValue} = useContext(BetValueContext)
    const {changeAmt, setChangeAmt} = useContext(ChangeContext)

    const updateCashReceived = (e) => {
        const keyValue = e.target.value
        const totalCash = cashReceived + keyValue
        setCashReceived(totalCash)
        // console.log(typeof(totalCash))
        updateChange()
    }

   

    const updateChange = () => {
        let totalChange = ""
        if(cashReceived <= betValue)
        {
            totalChange = "0.00"
        }
        else
        {
            totalChange = cashReceived - betValue
        }
        setChangeAmt(totalChange)
    }

    const clearCash = () => {
        const totalCash = ""
        const changeAmt = ""
        setCashReceived(totalCash)
        setChangeAmt(changeAmt)
    }

    

    return (
        <>
            <button onClick={updateCashReceived}value="7">7</button>
            <button onClick={updateCashReceived}value="8">8</button>
            <button onClick={updateCashReceived}value="9">9</button>
            <button onClick={updateCashReceived}value="4">4</button>
            <button onClick={updateCashReceived}value="5">5</button>
            <button onClick={updateCashReceived}value="6">6</button>
            <button onClick={updateCashReceived}value="1">1</button>
            <button onClick={updateCashReceived}value="2">2</button>
            <button onClick={updateCashReceived}value="3">3</button>
            <button onClick={updateCashReceived}value="0">0</button>
            <button onClick={updateCashReceived}value=".">.</button>
            <button onClick={clearCash}id="clear-num-pad">cl</button>
        </>
    )
}

export default ModalSelection
