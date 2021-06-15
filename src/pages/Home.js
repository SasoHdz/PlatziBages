import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Home.css';
import LogoAstronautas from '../components/images/astronauts.svg';
import PlatziConfLogo from '../components/images/platziconf-logo.svg';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="contenedor">
                        <div className="element__left">
                            <img src={PlatziConfLogo} alt="Platzi conf logo"/>
                            <h4>PRINT YOUR BADGES</h4>
                            <p>The easiest way to manage your <br/>conference</p>
                            <Link to="/badges/new" className="btn btn-primary">
                                Start now
                            </Link>
                        </div>
                        <div className="element__right">
                            <img src={LogoAstronautas} alt="Logo de astronautas"/>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;