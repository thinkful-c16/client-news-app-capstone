import React from 'react';
import SearchSimple from './search-simple.js';
import SearchAdvanced from './search-advanced.js';
import FontAwesome from 'react-fontawesome';
import '../../styles/search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     searchAdvanced: false
    }
    this.searchToggle = this.searchToggle.bind(this);
  }

  searchToggle() {
    if (this.state.searchAdvanced !== true) {
      this.setState({
        searchAdvanced: true
      })
    }
    else {
      this.setState({
        searchAdvanced: false
      })
    }
  }

  render() {

    let searchMessage;
    let angleButton;
    if (this.state.searchAdvanced) {
      searchMessage = <div className="search-message">
                        Advanced Search:
                      </div>;
      angleButton = <button className="search-options-icon" onClick={this.searchToggle}>
                      <FontAwesome name='angle-double-left' size='2x' />
                    </button>;
    } else {
      searchMessage = <div className="search-message">
                        Search:
                      </div>;
      angleButton = <button className="search-options-icon" onClick={this.searchToggle}>
                      <FontAwesome name='angle-double-down' size='2x' />
                    </button>;
    }

    return (
      <div className="search-div">
        {searchMessage}
        <div className="search-input">
          {this.state.searchAdvanced ? (
            <SearchAdvanced onClick={(query, category) => this.props.onAdvancedSearch(query, category)}/>
          ) : (
            <SearchSimple onClick={query => this.props.onSimpleSearch(query)}/>
          )}
          {angleButton}
        </div>
      </div>
    )

  }
}