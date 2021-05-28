import React, {Fragment} from 'react';
import { Navbar } from '../../subComponents/Navbar';
import { StartupCard } from '../../miniComponents/StartupCard';
import { StartupMenu } from '../../subComponents/StartupMenu';

import './StartupMain.css';

export function StartupMain(){
    return(
        <Fragment>          
            <Navbar/>
            <div className="d-flex flex-column startup-main-background">
                <div className="start-banner">
                    <button className="banner-btn">View Startups</button>
                </div>
                
                <div className="comp-row d-flex justify-content-between">
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>    
                </div>

                <div className="comp-row d-flex justify-content-between align-items-center">
                    <StartupMenu></StartupMenu>
                    <StartupMenu></StartupMenu>
                    <StartupMenu></StartupMenu>
                </div>

                <div className="comp-row d-flex justify-content-between">
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>    
                </div>

                <div className="comp-row d-flex justify-content-between">
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>    
                </div>

                <div className="comp-row d-flex justify-content-between">
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>
                    <StartupCard></StartupCard>    
                </div>
            </div>
        </Fragment>
    )
}