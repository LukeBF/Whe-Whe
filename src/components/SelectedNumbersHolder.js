import SelectedNumberItems from './SelectedNumberItems'
import SelectedNumbersContext from '../context/SelectedNumbersContext'
import BetValueContext from '../context/BetValueContext'
import {useContext} from 'react'


const SelectedNumbersHolder = () => {

    const {selectedNumbers} = useContext(SelectedNumbersContext)
    const {betValue, setBetValue} = useContext(BetValueContext)

    const updatedSelectedNumbers = [...selectedNumbers]    

    
    return (
        <>
            <div>
                {updatedSelectedNumbers.map((number)=>(
                    <SelectedNumberItems key={number.id} id={number.id} label={number.label}/>
                ))}
            </div>
            
            <p>Total:${betValue}</p>
        </>
    )
}

export default SelectedNumbersHolder
