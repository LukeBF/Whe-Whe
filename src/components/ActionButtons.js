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
            <Link to="/cash">CASH</Link>
            <Link to="" onClick={clearSelected}>CLEAR</Link>
        </>
    )
}

export default ActionButtons
