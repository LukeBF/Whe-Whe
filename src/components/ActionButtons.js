import React from 'react'

import SelectedNumbersContext from '../context/SelectedNumbersContext'
import {useContext} from 'react'

const ActionButtons = () => {

    const {setSelectedNumbers} = useContext(SelectedNumbersContext)

    const clearSelected = () => {
        const clearedSelectedNumbers = [];
        setSelectedNumbers(clearedSelectedNumbers)
        
    }

    return (
        <>
            <button>CASH</button>
            <button onClick={clearSelected}>CLEAR</button>
        </>
    )
}

export default ActionButtons
