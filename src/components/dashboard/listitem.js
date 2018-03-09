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
      this.setWrapperRef = this.setWrapperRef.bind(this);  
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      }
  
  componentDidMount() {
    this.setState({
      dropdownClass: 'hidden',
      saveToCollectionClass: 'hidden'
    })
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  modalToggle() {
    this.setState({
      isModalVisible: !this.state.isModalVisible 
    });
  }

  shareTwitter() {
    this.props.dispatch(shareActivity(this.props.article, 'Twitter'));
  }

  shareFacebook() {
    this.props.dispatch(shareActivity(this.props.article, 'Facebook'));
  }

  shareLinkedin() {
    this.props.dispatch(shareActivity(this.props.article, 'LinkedIn'));
  }

  shareReddit() {
    this.props.dispatch(shareActivity(this.props.article, 'Reddit'));
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

  setWrapperRef(node){
    this.wrapperRef = node;
  }

  handleOutsideClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if(this.state.dropdownClass==="show") {
        this.setState({dropdownClass: "hidden"})
      }
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
          <a key={shortid.generate()} id={collection._id} onClick={this.onSaveToCollection}>{collection.collectionTitle}</a>
        )
      })
    } else {
      collectionsDropdownList = <a>No collections found! Make one!</a>
    }

      return ( 
      <li className="article-list">
        <div className="li-container">
          <img src={this.props.article.image} alt={this.props.article.title} />
          <h2>{this.props.article.title}</h2>
        </div>
        <div className='dropdown' ref={this.setWrapperRef}>
          <div className="dropbtn" onClick= {this.toggleDropdown}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
            <a target="_blank" href={this.props.article.url}>Read article on {this.props.article.source.name}</a>
            <a onClick={this.modalToggle}>Save to New Collection</a>
            <a onClick={this.toggleSaveToCollection}>Save to Existing Collection</a>
            <div className={classNames(this.state.saveToCollectionClass, 'collections-dropcontent')}>
              {collectionsDropdownList}
            </div>
            <a onClick={this.toggleSocial}>Share to Social Media</a>

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