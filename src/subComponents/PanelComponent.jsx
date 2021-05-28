import React, {Fragment} from 'react';
import './PanelComponent.css';
import {AgentProfile} from '../props/AgentProfile';

export function PanelComponent(){
    const name = AgentProfile.name;
    const profilePic = AgentProfile.profilePic;
    const progress = AgentProfile.progress.toString();

    return(
        <Fragment>
            <div className="h-25 panel panel-gradient d-flex justify-content-center">
                <div className="panel-right">
                    <img href={profilePic}/>
                    <h1>Image Here!</h1>
                </div>
                <div className="d-flex flex-column panel-left">
                    <div className>
                        <h1>Welcome back,</h1>
                        <h2>{name}</h2>
                        <h3>{progress}% Completed</h3>
                    </div>
                    <div className="d-flex btn-tab">
                        <button className="panel-btn">Resume</button>
                    </div>
                </div>  
            </div>
        </Fragment>
    )
}