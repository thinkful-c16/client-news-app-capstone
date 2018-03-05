import React from 'react';
import { connect } from 'react-redux';
import '../../styles/dashboard.css';
import '../../styles/listitem.css';
import requiresLogin from '../requires-login';
import CollectionsCreateModal from '../collections/collections-create-modal';
import * as actions from '../../actions/collections';
import shortid from 'shortid';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import {shareActivity} from '../../actions/activity';
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

export class ListItem extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
        dropdownClass: 'hidden',
        socialDropClass: 'hidden',
        saveToCollectionClass: 'hidden',

      }
      this.modalToggle = this.modalToggle.bind(this);
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.toggleSocial = this.toggleSocial.bind(this);
      this.toggleSaveToCollection = this.toggleSaveToCollection.bind(this);
      this.onSaveToCollection = this.onSaveToCollection.bind(this);
      this.shareTwitter = this.shareTwitter.bind(this);
      this.shareFacebook = this.shareFacebook.bind(this);
      this.shareLinkedin = this.shareLinkedin.bind(this);
      this.shareReddit = this.shareReddit.bind(this);
      }
  
  componentDidMount() {
    this.setState({
      dropdownClass: 'hidden',
      saveToCollectionClass: 'hidden'
    })
  }

  modalToggle() {
    this.setState({
      isModalVisible: !this.state.isModalVisible 
    });
  }

  shareTwitter() {
    this.props.dispatch(shareActivity(this.props.article, 'twitter'));
  }

  shareFacebook() {
    this.props.dispatch(shareActivity(this.props.article, 'facebook'));
  }

  shareLinkedin() {
    this.props.dispatch(shareActivity(this.prop.article, 'linkedin'));
  }

  shareReddit() {
    this.props.dispatch(shareActivity(this.props.article, 'reddit'));
  }

  onSaveToCollection(e) {
    const collectionId = e.target.id;
    this.props.dispatch(actions.addToCollection(collectionId, this.props.article));
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

  toggleSocial() {
    if (this.state.socialDropClass === "hidden") {
      this.setState({socialDropClass: "show"})
    }
    else{
      this.setState({socialDropClass: "hidden"})
    }
  }

  render() {
    let collectionsDropdownList;

    if (this.props.collections.length !== 0) {
      collectionsDropdownList = this.props.collections.map(collection => {
        return(
          <a key={shortid.generate()} id={collection._id} href="#" onClick={this.onSaveToCollection}>{collection.collectionTitle}</a>
        )
      })
    } else {
      collectionsDropdownList = <a href="#">No collections found! Make one!</a>
    }

      return ( 
      <li className="article-list">
        <div className="li-container">
          <img src={this.props.article.image} alt={this.props.article.title} />
          <h2>{this.props.article.title}</h2>
        </div>
        <div className='dropdown'>
          <div className="dropbtn" onMouseDown= {this.toggleDropdown}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
            <a target="_blank" href={this.props.article.url}>Read article on {this.props.article.source.name}</a>
            <a onClick={this.modalToggle}>Save to New Collection</a>
            <a href="#" onMouseOver={this.toggleSaveToCollection}>Save to Existing Collection</a>
            <div className={classNames(this.state.saveToCollectionClass, 'collections-dropcontent')}>
              {collectionsDropdownList}
            </div>
            <a href="#" onMouseOver={this.toggleSocial} >Share to Social Media</a>
              <div className={classNames(this.state.socialDropClass, 'social-content')}>
                <div onClick={this.shareTwitter}>
                  <TwitterShareButton
                    children={<TwitterIcon size={32} round={true} />}
                    url={this.props.article.url} />
                </div>
                <div onClick={this.shareFacebook}>
                  <FacebookShareButton
                    children={<FacebookIcon size={32} round={true} />}
                    url={this.props.article.url}/>
                </div>
                <div onClick={this.shareLinkedin}>
                  <LinkedinShareButton
                    children={<LinkedinIcon size={32} round={true} />}
                    url={this.props.article.url} />
                </div>
                <div onClick={this.shareReddit}>
                  <RedditShareButton
                    children={<RedditIcon size={32} round={true} />}
                    url={this.props.article.url} />
                </div>
              </div>
          </div>
        </div>
        { this.state.isModalVisible &&
            <CollectionsCreateModal article={this.props.article} onCloseModal={this.modalToggle}/>
        }
      </li>
      )}
}

export default requiresLogin()(connect()(ListItem));