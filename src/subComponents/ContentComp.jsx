import React from 'react';
import './ContentComp.css';

export function ContentComp(){
    return(
        <div className="d-flex flex-column dashboard-content">
            <div className="d-flex  flex-row">
                <h1 className="dashboard-submenu">Modules</h1>
                <h1 className="dashboard-submenu">Calendar</h1>
                <h1 className="dashboard-submenu">Messages</h1>
            </div>
            <div className="week-card-wrapper">
                <div className="d-flex flex-row-reverse"><button className="btn-completed">Completed</button></div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="week-card-title">Week 1 - Fundamentals of Cryptocurrency</h1>
                    <div className="card-progress-bar"></div>
                    <h2 className="week-card-progress">100% Completed</h2>
                </div>
            </div>
            <div className="week-card-wrapper">
                <div className="d-flex flex-row-reverse"><button className="btn-completed">Completed</button></div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="week-card-title">Week 1 - Fundamentals of Cryptocurrency</h1>
                    <div className="card-progress-bar"></div>
                    <h2 className="week-card-progress">100% Completed</h2>
                </div>
            </div>
            <div className="week-card-wrapper">
                <div className="d-flex flex-row-reverse"><button className="btn-completed">Completed</button></div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="week-card-title">Week 1 - Fundamentals of Cryptocurrency</h1>
                    <div className="card-progress-bar"></div>
                    <h2 className="week-card-progress">100% Completed</h2>
                </div>
            </div>
            <div className="week-card-wrapper">
                <div className="d-flex flex-row-reverse"><button className="btn-completed">Completed</button></div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="week-card-title">Week 1 - Fundamentals of Cryptocurrency</h1>
                    <div className="card-progress-bar"></div>
                    <h2 className="week-card-progress">100% Completed</h2>
                </div>
            </div>
        </div>
            //<CurrentWeekList></CurrentWeekList>      
    )
}