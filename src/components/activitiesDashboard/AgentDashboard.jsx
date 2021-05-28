import React, {Fragment} from 'react';
import { Navbar } from '../../subComponents/Navbar';
import { CourseWeeks } from '../../subComponents/CourseWeeks';
import { PanelComponent } from '../../subComponents/PanelComponent';
import { ContentComp } from '../../subComponents/ContentComp';
import './AgentDashboard.css';

export function AgentDashboard(){
    return(
        <Fragment>          
            <Navbar/>
            <div className="d-flex full-height">
                <div className="w-25 sidebar">
                    <CourseWeeks/>
                </div>
                <div className="w-75 full-height">
                    <PanelComponent/>
                    <div className="h-75 sidebar">
                        <ContentComp/>  
                    </div>
                </div>
            </div>     
        </Fragment>
    )
}