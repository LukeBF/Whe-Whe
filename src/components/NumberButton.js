import React,{useState,useContext} from 'react'
import NumbersContext from '../context/NumbersContext'
import SelectedNumbersContext from '../context/SelectedNumbersContext'

const NumberButton = ({id,isSelected}) => {

    const MAX_NUMBERS = 5

    const [background,setBackground] = useState("#efefef")

    const {numberBtns,setNumbersBtns} = useContext(NumbersContext)
    
    const {selectedNumbers,setSelectedNumbers} = useContext(SelectedNumbersContext)


    const activateBtn = (e) =>{

        //ORIGINAL CODE
        const prevSelectedNumbers = [...selectedNumbers]

        // Create an array to spread/copy the initial array to be altered
        const newBtnArray = [...numberBtns]

        const foundBtn = newBtnArray.find(button => button.id === id)

        // Flip the value of foundNumber.isSelected form false to true and if it is true, flip it back to false
        foundBtn.isSelected = !foundBtn.isSelected


        //ORIGINAL CODE
        const btnValue = parseInt(e.target.id) 
        const selectedNumberItem = {id:btnValue, label:"Mark"}
        
        let foundNumber = null;

        if(foundBtn.isSelected == true)
        {
            setBackground("#ffb830")
            foundNumber = newBtnArray.btnValue
            selectedNumbers.push(foundNumber)
            setSelectedNumbers(selectedNumbers)
            
        }
        else{
            setBackground("#efefef")
            //foundNumber = 0
        }

        // Limit the number of selected numbers to 5 and give a warning to the user if they click a 6th time
        if(prevSelectedNumbers.length < MAX_NUMBERS)
        {
            prevSelectedNumbers.push(selectedNumberItem)
            setSelectedNumbers(prevSelectedNumbers)
        }
        else
        {
            foundBtn.isSelected = false;
            alert("You have reached the limit")
        }

    }

    return (
        <>
            <button onClick={activateBtn} id={id} className={isSelected ? "active-button" : "inactive-button"}>{id}</button>
        </>
    )
}

export default NumberButton
