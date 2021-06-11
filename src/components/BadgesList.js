import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
                return (
                    <li className="badge" key={badge.id}>
                        <div className="badge__container">
                            <img className="badge__container-avatar" src={badge.avatarUrl} alt="avatar"/>
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