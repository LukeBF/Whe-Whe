import React from 'react'
import {useState} from 'react'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import HomePage from '../pages/HomePage'
import CashOutPage from '../pages/CashOutPage'
import WelcomePage from '../pages/WelcomePage';

// CSS
import '../assets/css/App.css'
import '../assets/css/Utilities.css'

// Context
import NumbersContext from '../context/NumbersContext'
import SelectedNumbersContext from '../context/SelectedNumbersContext'
import BetValueContext from '../context/BetValueContext'
import CurrencyValuesContext from '../context/CurrencyValuesContext'
import ReceiveCashContext from '../context/ReceiveCashContext';
import ChangeContext from '../context/ChangeContext';

const App = () => {

    const TOTAL_NUMBERS = 20
    const BET_AMT = ""
    const CASH_RECD = ""
    const CHANGE_AMT = ""

    let numberBtnsArr = []

    for(let i=1; i<=TOTAL_NUMBERS; i++)
    {
        const numberItem = {id:i, isSelected:false, btnValue:i}
        numberBtnsArr.push(numberItem)
    }

    const [cashReceived, setCashReceived] = useState(CASH_RECD)
    const [numberBtns, setNumberBtns] = useState(numberBtnsArr)
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [betValue, setBetValue] = useState(BET_AMT)
    const [changeAmt, setChangeAmt] = useState(CHANGE_AMT)
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
      <Router>
        <NumbersContext.Provider value={{numberBtns,setNumberBtns}}>
        <SelectedNumbersContext.Provider value={{selectedNumbers,setSelectedNumbers}}>
        <BetValueContext.Provider value={{betValue,setBetValue}}>
        <CurrencyValuesContext.Provider value={{currencyValues,setCurrencyValues}}>
        <ReceiveCashContext.Provider value={{cashReceived, setCashReceived}}>
        <ChangeContext.Provider value={{changeAmt, setChangeAmt}}>
          <Switch>
              <Route exact path="/">
                  <WelcomePage />
              </Route>
              <Route path="/home">
                  <HomePage />
              </Route>
              <Route path="/cash">
                  <CashOutPage />
              </Route>
          </Switch>
        </ChangeContext.Provider>
        </ReceiveCashContext.Provider>
        </CurrencyValuesContext.Provider>  
        </BetValueContext.Provider>
        </SelectedNumbersContext.Provider>
        </NumbersContext.Provider>
      </Router>
    </div>
  )
}

export default App

