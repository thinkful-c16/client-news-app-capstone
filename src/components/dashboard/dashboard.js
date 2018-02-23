import React from 'react';
import { connect } from 'react-redux';
import Search from '../search/search.js';
import requiresLogin from '../requires-login';
import shortid from 'shortid';
import * as actions from '../../actions/api';
import '../../styles/dashboard.css';
//remove Dashboard from app.js

export class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.updateDashboard = this.updateDashboard.bind(this);
  }

  componentDidMount() {
    console.log('ello mate');
    this.props.dispatch(actions.fetchTopHeadlines());
  }

  updateDashboard(query) {
    console.log(query);
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
        <h2>Today's Top Headlines</h2>
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