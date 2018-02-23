import React from 'react';
import { connect } from 'react-redux';
import Search from '../search/search.js';
import requiresLogin from '../requires-login';
import shortid from 'shortid';
import * as actions from '../../actions/api';
//remove Dashboard from app.js

export class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dashboardHeader: null
    }
    this.simpleSearch = this.simpleSearch.bind(this);
  }

  componentDidMount() {
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
      this.props.dispatch(actions.updateHeadlines(query));
    }
  }


  render() {
    const myList = this.props.headlines;

    const headlinesList = myList.map(headline => {
      return <li key={shortid.generate()}>
        <a href={headline.url} target="_blank">
          <img src={headline.urlToImage} width='100' alt={headline.title} />
          {headline.title}
        </a>
      </li>
    });
    
    return(
      <div className='dashboard'>
        <Search onClick={input => this.simpleSearch(input)}/>
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