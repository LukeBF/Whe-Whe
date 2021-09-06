import React from 'react'

const CurrencyButtons = (props) => {


    return (
        <>
            <div><button>{props.value}</button></div>
            {/* <div><button onClick={dollarValue}>$5</button></div> */}
            {/* <div><button onClick={dollarValue}>$10</button></div> */}
            {/* <div><button onClick={dollarValue}>$20</button></div> */}
        </>
    )
}

export default CurrencyButtons
