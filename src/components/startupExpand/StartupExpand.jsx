import React, {Fragment} from 'react';
import './StartupExpand.css';
import { Navbar } from '../../subComponents/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import MangoSwap from './../../imgs/mango-swap.jpg';

export function StartupExpand(){

    return(
        <Fragment>
            <Navbar></Navbar>
            <div className="d-flex flex-column gradient-bg">
                <div className="d-flex justify-content-between upper-wrapper">
                    <div className="d-flex align-items-center upper-nav-left"> 
                        <FontAwesomeIcon icon={fas, faArrowCircleLeft} className="prev-btn"/>
                        <img src={MangoSwap} alt="mango-icon" className="mango-icon"/>
                        <h1 className="brand-title">MangoSwap</h1>
                    </div>
                    
                    <div className="element"> 
                        <h1 >Element</h1>
                    </div>
                    <div className="element"> 
                        <h1 >Element</h1>
                    </div>
                </div>

                <div className="d-flex justify-content-between body-wrapper">
                    <div className="body-left">
                        <h1 >Left</h1>
                    </div>
                    <div className="d-flex flex-column justify-content-between body-right">
                        <div className="body-right-up">
                            <h1>right-up</h1>
                        </div>
                        <div className="body-right-down">
                            <h1>right-down</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}