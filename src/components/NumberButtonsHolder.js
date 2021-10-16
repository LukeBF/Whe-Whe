import React,{useContext} from 'react'
import NumberButton from '../components/NumberButton'
import NumbersContext from '../context/NumbersContext'

const NumberButtonsHolder = () => {
    
    const {numberBtns} = useContext(NumbersContext)
    console.log(numberBtns)
    return (
        <>
            {numberBtns.map((btn)=>(
                <NumberButton key={btn.id} id={btn.id} isSelected={btn.isSelected}/> 
            ))}
        </>
    )
}

export default NumberButtonsHolder
