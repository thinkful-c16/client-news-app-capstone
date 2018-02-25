import React from 'react';
import { connect } from 'react-redux';
import Search from '../search/search.js';
import requiresLogin from '../requires-login';
import shortid from 'shortid';
import * as actions from '../../actions/api';
import '../../styles/dashboard.css';
import FontAwesome from 'react-fontawesome';
//remove Dashboard from app.js

export class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dashboardHeader: null,
      dropdownClass: 'hidden'
    }
    this.simpleSearch = this.simpleSearch.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      dashboardHeader: `Today's Top Headlines`
    })
    this.setState({
      dropdownClass: 'hidden'
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

  toggleDropdown(classid) {
    if (this.state.dropdownClass === "hidden") {
      this.setState({dropdownClass: "show"})
    }
    else{
      this.setState({dropdownClass: "hidden"})
    }
    console.log(this.state.dropdownClass);
  }

  render() {
    const myList = this.props.headlines;

    const headlinesList = myList.map(headline => {
      return <li key={shortid.generate()}>
        <a href={headline.url} target="_blank">
          <img src={headline.urlToImage} width='100' alt={headline.title} />
          {headline.title}
        </a>
        <div className='dropdown'>
          <button className="dropbtn" onClick={this.toggleDropdown.bind(this)}>
            <FontAwesome name='chevron-circle-down' />
          </button>
          <div id={headline.id} className={this.state.dropdownClass} ref={headline.id}>
            <a href={headline.url}>Read article on {headline.author}</a>
            <a href="#">Save to New Collection</a>
            <a href="#">Save to Existing Collection</a>
            <a href="#">Share to Social Media</a>
          </div>
        </div>
      </li>
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