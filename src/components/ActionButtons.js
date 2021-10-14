import React from 'react'
import {Link} from 'react-router-dom'

import SelectedNumbersContext from '../context/SelectedNumbersContext'
import BetValueContext from '../context/BetValueContext'

import {useContext} from 'react'

const ActionButtons = () => {

    const {setSelectedNumbers} = useContext(SelectedNumbersContext)

    const {setBetValue} = useContext(BetValueContext)

    const clearSelected = () => {
        const clearedSelectedNumbers = [];
        const BET_TOTAL = 0
        setSelectedNumbers(clearedSelectedNumbers)
        setBetValue(BET_TOTAL)
    }

    return (
        <>
            <button><Link to="/cash">CASH</Link></button>
            <button><Link to="" onClick={clearSelected}>CLEAR</Link></button>
        </>
    )
}

export default ActionButtons
