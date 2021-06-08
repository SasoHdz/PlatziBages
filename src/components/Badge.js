import React from 'react';

import "./styles/Badge.css";
import confLogo from './images/badge-header.svg';

class Badge extends React.Component{
    render()
    {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo conferencia" />
            </div>

            <div className="Badge__section-name">
                <img 
                className="Badge__avatar"
                src="https://www.gravatar.com/avatar?d=identicon" 
                alt="Avatar"/>
                <h1>Isaac <br/> Hernandez</h1>
            </div>

            <div className="Badge__section-info">
                <h3>Frontend Engineer</h3>
                <div>@SasoHdz</div>
            </div>

            <div className="Badge__footer">
                <div>#platziconf</div>
            </div>
        </div>;
    }
}

export default Badge;