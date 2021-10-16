import React from 'react'

import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div>
            <div className="welcome-container grid">
                <div className="welcome-content grid grid-col-1">
                    <h1>WHE WHE ON D' AVENUE</h1>
                    <button className="action-btn"><Link to="/home">PLAY</Link></button>
                </div>
                <div className="color-overlay"></div>
            </div>
        </div>
    )
}

export default WelcomePage
