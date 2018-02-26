import React from 'react';
import shortid from 'shortid';
import '../../styles/dashboard.css';
import FontAwesome from 'react-fontawesome';

export default class ListItem extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        dropdownClass: 'hidden',
        url: '',
        urlToImage: '',
        title: '',
        id: '',
        author: ''
      }
      this.toggleDropown = this.toggleDropdown.bind(this);
      }
    
  componentDidMount() {
    this.setState({
      dropdownClass: 'hidden'
    })
  }

  toggleDropdown() {
    if (this.state.dropdownClass === "hidden") {
      this.setState({dropdownClass: "show"})
    }
    else{
      this.setState({dropdownClass: "hidden"})
    }
    console.log(this.state.dropdownClass);
  }

  render() {
      return <li key={shortid.generate()}>
        <a href={this.state.url} target="_blank">
          <img src={this.state.urlToImage} width='100' alt={this.state.title} />
          {this.state.title}
        </a>
        <div className='dropdown'>
          <button className="dropbtn" onClick= {e => this.toggleDropown(e)}>
            <FontAwesome name='chevron-circle-down' />
          </button>
          <div id={this.state.id} className={this.state.dropdownClass} ref={this.state.id}>
            <a href={this.state.url}>Read article on {this.state.author}</a>
            <a href="#">Save to New Collection</a>
            <a href="#">Save to Existing Collection</a>
            <a href="#">Share to Social Media</a>
          </div>
        </div>
      </li>
    }
}