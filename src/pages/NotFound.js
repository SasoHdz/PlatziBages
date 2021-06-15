import React from 'react';

import './styles/NotFound.css';
import Astronauta from '../components/images/404.png';
import Mundo from '../components/images/mundo.png';

function NotFoud (){
    return (
        <React.Fragment>
            <div className="error">
                <h1>404</h1>    
                <p>Pagina no encontrada</p>
                <img className="astronauta" src={Astronauta} alt="Astronauta"/>
                <img className="mundo" src={Mundo} alt="Mundo"/>
            </div>
        </React.Fragment>
    );
}

export default NotFoud;