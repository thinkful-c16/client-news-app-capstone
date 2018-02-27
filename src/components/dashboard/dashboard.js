import React from 'react';
import { connect } from 'react-redux';
import Search from '../search/search.js';
import requiresLogin from '../requires-login';
import shortid from 'shortid';
import * as actions from '../../actions/api';
import '../../styles/dashboard.css';
import ListItem from './listitem'
import ActivityFeed from '../activity/activity-feed'
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
//remove Dashboard from app.js

export class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dashboardHeader: null,
      feedClass: 'max',
      feedButton: <FontAwesome name='chevron-circle-right' />,
      activityContent: <ActivityFeed />
    }
    this.simpleSearch = this.simpleSearch.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.toggleFeedClass = this.toggleFeedClass.bind(this);
  }

  componentWillMount() {
    this.setState({
      dashboardHeader: `Today's Top Headlines`,
      feedClass: 'max'
    })
    this.props.dispatch(actions.fetchTopHeadlines());
  }

  simpleSearch(input) {
    const query = input.trim();
    if (query === "") {
      this.setState({
        dashboardHeader: `Today's Top Headlines`
      })
      this.props.dispatch(actions.fetchTopHeadlines());
    } else {
      this.setState({
        dashboardHeader: `Your Search Results for "${query}"`
      })
      this.props.dispatch(actions.simpleSearch(query));
    }
  }

  advancedSearch(input, category) {
    const query = input.trim();
    if (query === "") {
      console.log('search without query', category);
      this.setState({
        dashboardHeader: `Today's Top Headlines for ${category}`
      })
      this.props.dispatch(actions.advancedSearchCategory(category));
    } else {
      this.setState({
        dashboardHeader: `Today's Top Headlines including "${query}" in ${category}`
      })
      this.props.dispatch(actions.advancedSearchQueryCategory(query, category));
    }
  }

	toggleFeedClass(){
		if(this.state.feedClass === "max") {
      this.setState({feedClass: "min",
      feedButton: <FontAwesome name='chevron-circle-left' />,
      activityContent: '...'})
		}
		else {
      this.setState({feedClass: "max",
      feedButton: <FontAwesome name='chevron-circle-right' />,
      activityContent: <ActivityFeed />})
		}
	}

  render() {
    const myList = this.props.headlines;

    const headlinesList = myList.map(headline => {
      return <ListItem
        key={shortid.generate()}
        url={headline.url}
        urlToImage={headline.urlToImage}
        title={headline.title}
        id={headline.id}
        author={headline.author}
      />
    });
    
    return(
      <div className='dashboard'>
        <Search onSimpleSearch={input => this.simpleSearch(input)} onAdvancedSearch={(input, category) => this.advancedSearch(input, category)}/>
        <div className='main-section-dash'>
          <div className='newsfeed-container'>
            <h2>{this.state.dashboardHeader}</h2>
            <ul className='headlines-list'>
              {headlinesList}
            </ul>
          </div>
          <div className={classNames('activity-feed-container', this.state.feedClass)}>
            <div className='feed-btn' onClick={this.toggleFeedClass}>
              {this.state.feedButton}
            </div>
            <div className='activity'>
              {this.state.activityContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    headlines: state.api.headlines
  }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));