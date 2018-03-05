import React from 'react';
import {fetchActivities} from '../../actions/activity';
import requiresLogin from '../requires-login';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import '../../styles/explore.css';
//remove Dashboard from app.js
import {ExploreItem} from './exploreitem';
import shortid from 'shortid';

export class Explore extends React.Component{
  componentWillMount() {
    this.props.dispatch(fetchActivities());
  }

  render() {
    let activity;

    const exploreList = this.props.activities.activities.reverse().map(item => {
      if (item.activityType === "new collection") {
        activity = item.data.username.firstName + " "+item.data.username.lastName + " created a new collection called "+ `"` + item.data.collectionTitle+ `"`
      }
      else if(item.activityType === "new collection article"){
        activity =  item.data.username.firstName + " " + item.data.username.lastName +" added the article "+ `"` +item.data.articleTitle+ `"`+" to "+ `"`+item.data.collectionTitle+ `"`+" collection"
      }
      else if(item.activityType === "share article"){
        activity = item.data.user.firstName + " "+ item.data.user.lastName +" shared the article "+ `"`+item.data.articleTitle+ `"`+" to "+item.channel
      }

      return(
        <ExploreItem 
            key={shortid.generate()}
            activity={activity} />
      )
    });

    return(
      <div className="all-activities">
        <p>Activity</p>
        {exploreList}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    activities: state.activities
  }
}

export default requiresLogin()(connect(mapStateToProps)(Explore));