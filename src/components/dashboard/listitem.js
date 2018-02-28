import React from 'react';
import '../../styles/dashboard.css';
import '../../styles/listitem.css';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

export default class ListItem extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        dropdownClass: 'hidden'
      }
      this.toggleDropdown = this.toggleDropdown.bind(this);
      }
    
  componentDidMount() {
    this.setState({
      dropdownClass: 'hidden'
    })
  }

  toggleDropdown(e) {
    if (this.state.dropdownClass === "hidden") {
      this.setState({dropdownClass: "show"})
    }
    else{
      this.setState({dropdownClass: "hidden"})
    }
  }

  render() {
      return <li className="article-list">
        <img src={this.props.urlToImage} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <div className='dropdown'>
          <div className="dropbtn" onMouseDown= {(e) => this.toggleDropdown(e)}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
            <a href={this.props.url}>Read article on {this.props.source}</a>
            <a href="#">Save to New Collection</a>
            <a href="#">Save to Existing Collection</a>
            <a href="#">Share to Social Media</a>
          </div>
        </div>
      </li>
    }
}