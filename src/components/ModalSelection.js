import React from 'react'

const ModalSelection = () => {

    const addAmtReceived = (e) => {
        const numberPadValue = parseInt(e.target.value)
        alert(numberPadValue)
        // const newBetAmt = betValue + cashValue
        // setBetValue(newBetAmt)
    }

    return (
        <>
            <button value="7" onClick={addAmtReceived}>7</button>
            <button value="8" onClick={addAmtReceived}>8</button>
            <button>9</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>0</button>
            <button>.</button>
            <button id="clear-num-pad">cl</button>
        </>
    )
}

export default ModalSelection
