import React,{useState, useContext} from 'react'
import ReceiveCashContext from '../context/ReceiveCashContext'
import BetValueContext from '../context/BetValueContext'
import ChangeContext from '../context/ChangeContext'

const ModalSelection = () => {

    const {cashReceived, setCashReceived} = useContext(ReceiveCashContext)
    const {betValue, setBetValue} = useContext(BetValueContext)
    const {changeAmt, setChangeAmt} = useContext(ChangeContext)
    

    // const addAmtReceived = (e) => {
    //     const numberPadValue = parseFloat(e.target.value)
    //     console.log(numberPadValue)
    //     setAmtReceived(e.target.value)
    // }

    const appendTotalCash = (e) => {
        const keyValue = e.target.value;
        const totalCash = cashReceived + keyValue;
        if(keyValue === '.' && totalCash.includes('.')) return totalCash
        setCashReceived(parseFloat(totalCash));
        calcChange();
        // if(cashReceived <= betValue)
        // {
        //     let totalChange = 0
        //     setChangeAmt(totalChange)
        // }
        // else
        // {
        //     calcChange();
        // }
       
    }

    const clearTotalCash = () => {
        const totalCash = 0;
        const changeAmt = 0
        setCashReceived(totalCash);
        setChangeAmt(changeAmt)
    }


    const calcChange = () => {    
        let totalChange = undefined;

        if(cashReceived <= betValue)
        {
             totalChange = 0
            // setChangeAmt(totalChange)
        }
        else
        {
            totalChange = cashReceived - betValue;
            // setChangeAmt(totalChange);
        }
        setChangeAmt(totalChange.toFixed(2))
        // let totalChange = cashReceived - betValue;
        // setChangeAmt(totalChange);
    }

    const addCents = () => {
        const dollarsAndCents = cashReceived + "."
        setCashReceived(dollarsAndCents)
    }
    

    return (
        <>
            <button onClick={appendTotalCash} value="7">7</button>
            <button onClick={appendTotalCash} value="8">8</button>
            <button onClick={appendTotalCash} value="9">9</button>
            <button onClick={appendTotalCash} value="4">4</button>
            <button onClick={appendTotalCash} value="5">5</button>
            <button onClick={appendTotalCash} value="6">6</button>
            <button onClick={appendTotalCash} value="1">1</button>
            <button onClick={appendTotalCash} value="2">2</button>
            <button onClick={appendTotalCash} value="3">3</button>
            <button onClick={appendTotalCash} value="0">0</button>
            <button onClick={addCents} value=".">.</button>
            <button onClick={clearTotalCash }id="clear-num-pad">cl</button>
        </>
    )
}

export default ModalSelection
