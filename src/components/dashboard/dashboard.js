import React from 'react';
import { connect } from 'react-redux';
import Search from '../search/search.js';
import requiresLogin from '../requires-login';
import shortid from 'shortid';
import * as actions from '../../actions/api';
import '../../styles/dashboard.css';
import ListItem from './listitem'
//remove Dashboard from app.js

export class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dashboardHeader: null
    }
    this.simpleSearch = this.simpleSearch.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
  }

  componentWillMount() {
    this.setState({
      dashboardHeader: `Today's Top Headlines`
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
        <h2>{this.state.dashboardHeader}</h2>
        <ul>
          {headlinesList}
        </ul>
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