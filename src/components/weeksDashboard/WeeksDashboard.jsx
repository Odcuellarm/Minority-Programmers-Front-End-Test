import React, {Fragment} from 'react';
import { Navbar } from '../../subComponents/Navbar';
import { CourseWeeks } from '../../subComponents/CourseWeeks';
import { WeeksPanelComponent } from '../../subComponents/WeeksPanelComponent';
import { WeeksContentComponent } from '../../subComponents/WeeksContentComponent';
import './WeeksDashboard.css';

export function WeeksDashboard(){
    return(
        <Fragment>          
            <Navbar/>
            <div className="d-flex full-height">
                <div className="w-25 sidebar">
                    <CourseWeeks/>
                </div>
                <div className="w-75 full-height">
                    <WeeksPanelComponent/>
                    <div className="h-75 sidebar">
                        <WeeksContentComponent/>  
                    </div>
                </div>
            </div>     
        </Fragment>
    )
}