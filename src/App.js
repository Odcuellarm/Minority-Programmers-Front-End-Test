import React from 'react';
import './App.css';
import { AgentDashboard } from './components/dashboards/AgentDashboard';
import { StartupExpand } from './components/startupExpand/StartupExpand';
import { StartupMain } from './components/startupMain/StartupMain';
import { LearnMain } from './components/learnMain/LearnMain';
import { WeeksDashboard } from './components/weeksDashboard/WeeksDashboard';

import { Link } from 'react-router-dom';
//import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
/* 
<Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Oscar Mendez</Link>} scroll>
    <Navigation>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
    </Navigation>
</Header>
*/

export function App(){
  return(
    //<AgentDashboard/>
    //<StartupExpand/>
    //<LearnMain/>
    <WeeksDashboard/>

  )
}

