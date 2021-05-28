import React, {Fragment} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookSquare, faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../src/imgs/mp-logo.jpg';


export function Navbar(){
    return(<Fragment>
                <nav className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand" href="#"><img src={Logo} className="mp-logo"/></a>
                        <div class="" id="">
                            <FontAwesomeIcon icon={fab, faTwitter} className="nav-icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={fab, faFacebookSquare} className="nav-icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={fab, faLinkedin} className="nav-icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={fab, faInstagram} className="nav-icon"></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="d-flex navbar-menu">
                            <a class="nav-link" href="#">Service</a>
                            <a class="nav-link" href="#">Events</a>
                            <a class="nav-link" href="#">Learn</a>
                            <a class="nav-link" href="#">Join</a>
                    </div>
                </nav>
            </Fragment>
    )
}
