import React from 'react'

import { Link } from 'react-router-dom'

const ModalActionBtns = () => {
    return (
        <>
            <div>
                <button>
                    <Link to="">Confirm</Link>
                </button>
            </div>  
            <div>
                <button>
                    <Link to="/home">Close</Link>
                </button>
            </div>   
        </>
    )
}

export default ModalActionBtns
