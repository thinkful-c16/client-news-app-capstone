import React from 'react';
import Media from 'react-media';
import {Link} from 'react-router-dom';

export default class NavLinks extends React.Component {

  render() {
    return (
      <div className="nav-links">
        <Media query={{ maxWidth: 560 }}>
         {matches => 
            matches ? (
              <div className="mobile-links">
                <Link to="/news">News</Link>
                <Link to="/feed">Feed</Link>
              </div>
            ) : (
              <div className="desktop-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to ="/explore">Explore</Link>
                <Link to ="/collections">My Collections</Link>
              </div>
            )
          }
        </Media>
      </div>
    )
  }
}