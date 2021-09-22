import React from 'react'
import {useState} from 'react'

// Components
import HomePage from '../pages/HomePage'

// CSS
import '../assets/css/App.css'
import '../assets/css/Utilities.css'

// Context
import NumbersContext from '../context/NumbersContext'
import SelectedNumbersContext from '../context/SelectedNumbersContext'
import BetValueContext from '../context/BetValueContext'
import CurrencyValuesContext from '../context/CurrencyValuesContext'

const App = () => {

    const TOTAL_NUMBERS = 20
    // const CURRENCY_BTNS = 4

    let numberBtnsArr = []
    // let currencyBtnsArr = []

    for(let i=1; i<=TOTAL_NUMBERS; i++)
    {
        const numberItem = {id:i, isSelected:false}
        numberBtnsArr.push(numberItem)
    }

    // for(let i=0; i<CURRENCY_BTNS; i++)
    // {
    //   const currencyValue = {id:i, value:}
    //   currencyBtnsArr.push(currencyValue)
    // }

    const [numberBtns, setNumberBtns] = useState(numberBtnsArr)
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [betValue, setBetValue] = useState("$0.00")
    const [currencyValues, setCurrencyValues] = useState([
      {
        value: 1
      },
      {
        value: 5
      },
      {
        value: 10
      },
      {
        value: 20
      }
    ])
    // console.log(currencyValues[1])
    
  return (
    <div>
        <NumbersContext.Provider value={{numberBtns,setNumberBtns}}>
          <SelectedNumbersContext.Provider value={{selectedNumbers,setSelectedNumbers}}>
            <BetValueContext.Provider value={{betValue,setBetValue}}>
              <CurrencyValuesContext.Provider value={{currencyValues,setCurrencyValues}}>
                <HomePage />
              </CurrencyValuesContext.Provider>  
            </BetValueContext.Provider>
          </SelectedNumbersContext.Provider>
        </NumbersContext.Provider>  
    </div>
  )
}

export default App

