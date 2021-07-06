import React from 'react';
import {Link} from 'react-router-dom';

import Gravatar from './Gravatar';
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="badge__container">
            <Gravatar 
               className="badge__container-avatar"
               email={this.props.badge.email}
            />
            <div className="badge__container-info">
                 <p className="name">
                    {this.props.badge.firstName} {this.props.badge.lastName}
                </p>
                <p><img className="twitter-icon" src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="icono twitter"/><a className="twitter" href="/">@{this.props.badge.twitter}</a></p>
                <p className="jobTitle">{this.props.badge.jobTitle}</p>
            </div>
        </div>
      );
    }
}

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges);
  
    React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
  
      setFilteredBadges(result);
    }, [badges, query]);
  
    return { query, setQuery, filteredBadges };
  }

function BadgesList (props) {
    
        const badges = props.badges;
        const {query, setQuery, filteredBadges}  = useSearchBadges(badges);

        if(filteredBadges.length === 0) {
            return (
                <div>
                    <div className="form-group">
                     <label>Filter Badges</label>
                     <input type="text" className="form-control"
                       value={query}
                       onChange={(e) => {
                          setQuery(e.target.value);
                                 }} 
                        />
                    </div>
                    <h3>No encontramos ningún badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            );
        }

        return (
        <div className="badgesList">
        <div className="form-group">
            <label>Filter Badges</label>
            <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
                setQuery(e.target.value);
            }}
            />
        </div>

        <ul className="list-unstyled">
            {filteredBadges.map(badge => {
            return (
                <li key={badge.id}>
                <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                >
                    <BadgesListItem badge={badge} />
                </Link>
                </li>
            );
            })}
        </ul>
        </div>
     );  
}

export default BadgesList;