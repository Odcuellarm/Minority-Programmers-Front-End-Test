import React from 'react';
import MangoSwap from '../imgs/mango-swap.jpg';

export function StartupCard(){
    return(
        <div className="startup-card-wrapper">
            <div className="startup-card-header">
                <img className="card-header-icon" src={MangoSwap}/>
                <h2 className="card-title">Magoswap</h2>
                <p className="card-description m-top">The mango swap coin is the future of cryptocurrency, it will allow user
                    share and tansact over defi networks with less fees.
                </p>
            </div>
            <div className="d-flex justify-content-between m-top">
                <h3 className="card-subtitle">Fund raise</h3>
                <h4 className="card-description">50% complete</h4>
            </div>
            <div>
                <h2 className="card-cyphers">$200,000 / $400,000</h2>
                <div className="progress-total"><div className="progress-completed"></div></div>
            </div>
            <div className="d-flex justify-content-between button-container">
                <button className="card-btn solid">Fund Startup</button>
                <button className="card-btn light">Learn more</button>
            </div>
        </div>
    )
}