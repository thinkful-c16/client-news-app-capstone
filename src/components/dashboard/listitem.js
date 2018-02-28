import React from 'react';
import '../../styles/dashboard.css';
import '../../styles/listitem.css';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

export default class ListItem extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        dropdownClass: 'hidden',
        saveToCollectionClass: 'hidden'
      }
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.toggleSaveToCollection = this.toggleSaveToCollection.bind(this);
      }
  
  componentDidMount() {
    this.setState({
      dropdownClass: 'hidden',
      saveToCollectionClass: 'hidden'
    })
  }

  onSaveToCollection() {
    console.log('heyo');
    this.toggleDropdown();
  }

  toggleSaveToCollection() {
    if (this.state.saveToCollectionClass === "hidden") {
      this.setState({saveToCollectionClass: "show"})
    }
    else{
      this.setState({saveToCollectionClass: "hidden"})
    }
  }

  toggleDropdown() {
    if (this.state.dropdownClass === "hidden") {
      this.setState({dropdownClass: "show"})
    }
    else{
      this.setState({dropdownClass: "hidden"})
    }
  }

  render() {
      return <li className="article-list">
        <img src={this.props.article.image} alt={this.props.article.title} />
        <h2>{this.props.article.title}</h2>
        <div className='dropdown'>
          <div className="dropbtn" onMouseDown= {this.toggleDropdown}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
            <a target="_blank" href={this.props.article.url}>Read article on {this.props.article.source.name}</a>
            <a href="#">Save to New Collection</a>
            <a href="#" onMouseOver={this.toggleSaveToCollection}>Save to Existing Collection</a>
            <div className={classNames(this.state.saveToCollectionClass, 'collections-dropcontent')}>
              hello
            </div>
            <a href="#">Share to Social Media</a>
          </div>
        </div>
      </li>
    }
}