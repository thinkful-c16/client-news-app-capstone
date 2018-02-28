import React from 'react';
import '../../styles/dashboard.css';
import '../../styles/listitem.css';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon
} from 'react-share';

export default class ListItem extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        dropdownClass: 'hidden',
        socialDropClass: 'hidden'
      }
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.toggleSocial = this.toggleSocial.bind(this);
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

  toggleSocial() {
    if (this.state.socialDropClass === "hidden") {
      this.setState({socialDropClass: "show"})
    }
    else{
      this.setState({socialDropClass: "hidden"})
    }
  }

  render() {
      return (
      <li className="article-list">
        <img src={this.props.urlToImage} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <div className='dropdown'>
          <div className="dropbtn" onMouseDown= {(e) => this.toggleDropdown(e)}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
            <a href={this.props.url}>Read article on {this.props.author}</a>
            <a href="#">Save to New Collection</a>
            <a href="#">Save to Existing Collection</a>
            <a href="#" onMouseOver={this.toggleSocial} >Share to Social Media</a>
              <div className={classNames(this.state.socialDropClass, 'social-content')}>
                <TwitterShareButton
                  children={<TwitterIcon size={32} round={true} />}
                  url={this.props.url}/>
                <FacebookShareButton
                  children={<FacebookIcon size={32} round={true} />}
                  url={this.props.url} />
                <LinkedinShareButton
                  children={<LinkedinIcon size={32} round={true} />}
                  url={this.props.url} />
                <RedditShareButton
                  children={<RedditIcon size={32} round={true} />}
                  url={this.props.url} />
              </div>
          </div>
        </div>
      </li>
      )}
}