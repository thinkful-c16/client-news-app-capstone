import React from 'react';
import {fetchActivities} from '../../actions/activity';
import {fetchUsersByQuery} from '../../actions/followers';
import requiresLogin from '../requires-login';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import '../../styles/explore.css';
//remove Dashboard from app.js
import {ExploreItem} from './exploreitem';
import shortid from 'shortid';

export class Explore extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchActivities());
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      searchQuery: target.value
    })
  }

  performSearch() {
    this.props.dispatch(fetchUsersByQuery(this.state.searchQuery));
  }

  render() {
    let activity;

    const exploreList = this.props.activities.activities.map(item => {
      if (item.activityType === "new collection") {
        activity = item.data.username.firstName + item.data.username.lastName + " created a new collection called "+ item.data.collectionTitle
      }
      else if(item.activityType === "new collection article"){
        activity =  item.data.username.firstName + item.data.username.lastName +" added the article "+item.data.articleTitle+" to "+item.data.collectionTitle+" collection"
      }
      else if(item.activityType === "share article"){
        activity = item.user.firstName + item.user.name.lastName +" shared the article "+item.data.articleTitle+" to "+item.channel
      }

      return(
        <ExploreItem 
            key={shortid.generate()}
            activity={activity} />
      )
    });

    return(
      <div className="explore">
        <div className="all-activities">
          {exploreList}
        </div>
        <div className="search-window">
          <div className="my-friend-info">
            <h3>You are following 0 people and you have 0 followers.</h3>
          </div>
          <div className="friend-search">
            <p>Search for friends to follow:</p>
            <input type="text" id="friendSearchInput" placeholder="Enter Name Here" onChange={this.handleInputChange} />
            <button className="search-icon" onClick={this.performSearch}><FontAwesome name='search' /></button>
          </div>
        </div>
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