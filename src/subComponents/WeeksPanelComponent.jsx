import React, {Fragment} from 'react';
import './PanelComponent.css';

export function WeeksPanelComponent(){

    return(
        <Fragment>
            <div className="h-25 panel panel-gradient d-flex justify-content-center">
                <div className="d-flex flex-column panel-left">
                    <div className>
                        <h1>Week 1</h1>
                        <h3>Progress</h3>
                    </div>
                    <div className="d-flex btn-tab">
                        <button className="panel-btn">100% Complete</button>
                    </div>
                </div>  
            </div>
        </Fragment>
    )
}