import SelectedNumberItems from './SelectedNumberItems'
import SelectedNumbersContext from '../context/SelectedNumbersContext'
import DollarValueContext from '../context/DollarValueContext'
import {useContext} from 'react'


const SelectedNumbersHolder = () => {

    const {selectedNumbers} = useContext(SelectedNumbersContext)
    const {dollarValue} = useContext(DollarValueContext)
    
    const updatedSelectedNumbers = [...selectedNumbers]
    const updatedDollarValue = [...dollarValue]

    

    return (
        <>
            <div>
                {updatedSelectedNumbers.map((number)=>(
                    <SelectedNumberItems key={number.id} id={number.id} label={number.label}/>
                ))}
            </div>
            <p>Total:{updatedDollarValue}</p>
        </>
    )
}

export default SelectedNumbersHolder
