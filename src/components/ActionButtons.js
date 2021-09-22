import React from 'react'

import SelectedNumbersContext from '../context/SelectedNumbersContext'
import BetValueContext from '../context/BetValueContext'

import {useContext} from 'react'

const ActionButtons = () => {

    const {setSelectedNumbers} = useContext(SelectedNumbersContext)

    const {setBetValue} = useContext(BetValueContext)

    const clearSelected = () => {
        const clearedSelectedNumbers = [];
        const BET_TOTAL = "0.00"
        setSelectedNumbers(clearedSelectedNumbers)
        setBetValue(BET_TOTAL)
        
    }

    return (
        <>
            <button>CASH</button>
            <button onClick={clearSelected}>CLEAR</button>
        </>
    )
}

export default ActionButtons
