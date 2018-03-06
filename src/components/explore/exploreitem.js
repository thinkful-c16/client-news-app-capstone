import React from 'react';
import '../../styles/explore.css';

export function ExploreItem(props){

    return(
      <li key={props.key}>
        <div className="activity-icon">{props.icon}</div>
        <div className="activity-text">{props.activity}</div>
      </li>
    )
}