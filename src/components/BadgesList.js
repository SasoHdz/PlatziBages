import React from 'react';
import {Link} from 'react-router-dom';

import Gravatar from './Gravatar';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        if(this.props.badges.length === 0)
            return (
                <div>
                    <h3>No encontramos ningún badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            );
        return <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
                return (
                    <li className="badge" key={badge.id}>
                        <div className="badge__container">
                            <Gravatar 
                                className="badge__container-avatar"
                                email={badge.email}
                                alt={`${badge.firstName} ${badge.lastName}`} 
                            />
                            <div className="badge__container-info">
                                <p className="name">
                                    {badge.firstName} {badge.lastName}
                                </p>
                                <p><img className="twitter-icon" src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="icono twitter"/><a className="twitter" href="/">@{badge.twitter}</a></p>
                                <p className="jobTitle">{badge.jobTitle}</p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    }
}

export default BadgesList;