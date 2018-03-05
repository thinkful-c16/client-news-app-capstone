import React from 'react';
import '../../styles/explore.css';

export function ExploreItem(props){

    return(
      <li key={props.key}>
        <span>{props.activity}</span>
      </li>
    )
}