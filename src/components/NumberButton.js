import React,{useContext} from 'react'
import NumbersContext from '../context/NumbersContext'
import SelectedNumbersContext from '../context/SelectedNumbersContext'

const NumberButton = ({id}) => {

    const MAX_NUMBERS = 5

    const {numberBtns} = useContext(NumbersContext)
    const {selectedNumbers,setSelectedNumbers} = useContext(SelectedNumbersContext)

    //const [prevSelectedNumbers] = useState([...selectedNumbers])

    const prevSelectedNumbers = [...selectedNumbers]

    const activateBtn = (e) =>{

        const btnValue = parseInt(e.target.id) 
        const selectedNumberItem = {id:btnValue, label:"Mark"}
        //console.log(btnValue)

        let findNumber = numberBtns.find((number)=>number.id === btnValue)
        //console.log(findNumber.id)
        
        if(findNumber.id === btnValue)
        {
            findNumber.isSelected = true;
            selectedNumbers.push(findNumber)
            setSelectedNumbers(selectedNumbers)

        }
        if(prevSelectedNumbers.length < MAX_NUMBERS)
        {
            prevSelectedNumbers.push(selectedNumberItem)
            setSelectedNumbers(prevSelectedNumbers)
        }
        else
        {
            findNumber.isSelected = false;
            alert("You have reached the limit")
        }

        //console.log(prevSelectedNumbers)
        //console.log(numberBtns)
        //console.log(selectedNumberItem)
        console.log(selectedNumbers)

    }

    return (
        <>
            <button onClick={activateBtn} id={id}>{id}</button>
        </>
    )
}

export default NumberButton
