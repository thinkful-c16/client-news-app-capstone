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
    this.updateDashboard = this.updateDashboard.bind(this);
  }

  componentDidMount() {
    this.setState({
      dashboardHeader: `Today's Top Headlines`
    })
    this.props.dispatch(actions.fetchTopHeadlines());
  }

  updateDashboard(query) {
    this.setState({
      dashboardHeader: `Your search results for ${query}`
    })
    this.props.dispatch(actions.updateHeadlines(query));
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
        <Search onClick={query => this.updateDashboard(query)}/>
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