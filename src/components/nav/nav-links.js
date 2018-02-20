import React from 'react';
import Media from 'react-media';

export default class NavLinks extends React.Component {

  render() {
    return (
      <div className="nav-links">
        <Media query={{ maxWidth: 560 }}>
         {matches => 
            matches ? (
              <div className="desktop-links">
                <a>News</a>
                <a>Feed</a>
              </div>
            ) : (
              <div>
                <a>Dashboard</a>
                <a>Explore</a>
                <a>My Collections</a>
              </div>
            )
          }
        </Media>
      </div>
    )
  }
}