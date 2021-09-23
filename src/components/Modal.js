import React,{useContext} from 'react'
// import BetValueContext from '../context/BetValueContext'

import ModalHeader from './ModalHeader'
import ModalInput from './ModalInput'
import ModalSelection from './ModalSelection'
import ModalActionBtns from './ModalActionBtns'

const Modal = () => {

    // const {betValue, setBetValue} = useContext(BetValueContext)

    // const addAmtReceived = (e) => {
    //     const numberPadValue = parseInt(e.target.value)
    //     alert(numberPadValue)
    //     // const newBetAmt = betValue + cashValue
    //     // setBetValue(newBetAmt)
    // }

    return (
        <div className="modal">
            <div className="modal-container">
                <ModalHeader />
                <div className="modal-content grid grid-col-2-modal">

                    {/* Left side of modal */}
                    <div>
                        <h2>Enter Amount Received</h2>

                        {/*  Form to enter dollar amounts */}
                        <form className="form-wrapper grid">
                            <ModalInput />
                        </form>
                    </div>

                    {/* Right side of modal */}
                    <div className="number-pad grid grid-col-3-modal">
                        <ModalSelection />
                    </div>
                </div>

                <div className="check-out-btns grid grid-col-2">
                    <ModalActionBtns />
                </div>
            </div>
        </div>
    )
}

export default Modal
