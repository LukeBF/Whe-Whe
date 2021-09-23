import React from 'react'
import Header from '../components/Header'
import CurrencyButtons from '../components/CurrencyButtons'
import NumberButtonsHolder from '../components/NumberButtonsHolder'
import ActionButtons from '../components/ActionButtons'
import SelectedNumbersHolder from '../components/SelectedNumbersHolder'
import GameLogo from '../assets/img/pick-5.png'
import Modal from '../components/Modal'

import CurrencyValuesContext from '../context/CurrencyValuesContext'
import {useContext} from 'react'

const HomePage = () => {

    const {currencyValues} = useContext(CurrencyValuesContext)
    // console.log(currencyValues)

    //const CURRENCY_BTNS = 4

    //let currencyValue;

    // for(let i=0; i<CURRENCY_BTNS; i++)
    // {
    //     currencyValue = currencyValues[i].value
    //     // console.log(currencyValue)    
    // }
    

    return (
        <div>
            <Header />
            <main className="game-screen grid grid-col-3">
                <section className="left-panel grid grid-row-2">
                    <div>
                        <img src={GameLogo} alt="game logo" />
                    </div>
                    <div className="currency grid grid-col-2">
                        {currencyValues.map((currencyVal)=>(<CurrencyButtons key={currencyVal.value} value={currencyVal.value}/>))}
                    </div>
                    {/* <div className="currency grid grid-col-2">
                        <CurrencyButtons/>
                    </div> */}
                </section>
                
                <section>
                    <div className="center-panel grid grid-col-5 grid-row-5">
                        <NumberButtonsHolder />
                    </div>
                    <div className="action-btns grid grid-col-2">
                        <ActionButtons />
                    </div>    
                </section>

                <section className="right-panel grid grid-row-3">
                    <h2>Selected Numbers</h2>
                    <SelectedNumbersHolder />
                </section>
                
                <div className="hide">
                    <Modal />
                </div>
            </main>
        </div>
    )
}

export default HomePage
