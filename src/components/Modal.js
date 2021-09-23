import React,{useContext} from 'react'
import BetValueContext from '../context/BetValueContext'

const Modal = () => {

    const {betValue, setBetValue} = useContext(BetValueContext)

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Checkout</h2>
                </div>

                <div className="modal-content grid grid-col-2-modal">

                    {/* Left side of modal */}
                    <div>
                        <h2>Enter Amount Received</h2>

                        {/*  Form to enter dollar amounts */}
                        <form className="form-wrapper grid">
                            <div className="input-field">
                                <label>Total</label>
                                <div>${betValue}</div>
                            </div>
                            <div className="input-field">
                                <label>Received</label>
                                <input type="text" className="input" />
                            </div>
                            <div className="input-field">
                                <label>Change</label>
                                <input type="text" className="input" />
                            </div>                         
                        </form>
                    </div>

                    {/* Right side of modal */}
                    <div className="number-pad grid grid-col-3-modal">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>0</button>
                        <button>.</button>
                        <button id="clear-num-pad">cl</button>
                    </div>
                </div>

                <div className="check-out-btns grid grid-col-2">
                    <div>
                        <button>
                            <a href="">Confirm</a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href="/">Close</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
