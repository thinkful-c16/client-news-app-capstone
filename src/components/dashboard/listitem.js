import React from 'react';
import '../../styles/dashboard.css';
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
      return <li>
        <a href={this.props.url} target="_blank">
          <img src={this.props.urlToImage} width='100' alt={this.props.title} />
          {this.props.title}
        </a>
        <div className='dropdown'>
          <button className="dropbtn" onMouseDown= {(e) => this.toggleDropdown(e)}>
            <FontAwesome name='chevron-circle-down' />
          </button>
          <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
            <a href={this.props.url}>Read article on {this.props.author}</a>
            <a href="#">Save to New Collection</a>
            <a href="#">Save to Existing Collection</a>
            <a href="#">Share to Social Media</a>
          </div>
        </div>
      </li>
    }
}