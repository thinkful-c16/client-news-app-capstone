import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
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
import {shareActivity} from '../../actions/activity';

import CollectionsDeleteModal from './collections-delete-modal';

export class CollectionsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClass: 'hidden',
      socialDropClass: 'hidden'
    }
    
    this.deleteModalToggle = this.deleteModalToggle.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleSocial = this.toggleSocial.bind(this);
    this.shareTwitter = this.shareTwitter.bind(this);
    this.shareFacebook = this.shareFacebook.bind(this);
    this.shareLinkedin = this.shareLinkedin.bind(this);
    this.shareReddit = this.shareReddit.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);  
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);  
  }

  componentDidMount() {
    this.setState({
      dropdownClass: 'hidden'
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

  toggleSocial() {
    if (this.state.socialDropClass === "hidden") {
      this.setState({socialDropClass: "show"})
    }
    else{
      this.setState({socialDropClass: "hidden"})
    }
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

  deleteModalToggle() {
    this.setState({
      isModalVisible: !this.state.isModalVisible 
    });
  }


  render() {
    return (
      <div className='collections-dropdown' ref={this.setWrapperRef}>
          <div className="collections-dropbtn" onClick= {this.toggleDropdown}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          { this.props.dropDownType === "article" ? (
            <div id={this.props.id} className={classNames(this.state.dropdownClass, 'collections-article-dropcontent')} ref={this.props.id}>
              <a target="_blank" href={this.props.article.url}>
                <FontAwesome name='book' />
                <span>Read article on {this.props.article.source.name}</span>
              </a>
              <a onMouseOver={this.toggleSocial} onClick={this.toggleSocial}>
                <FontAwesome name='share' />
                <span>Share to Social Media</span>
              </a>
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
              <a className='remove-article' onClick={this.deleteModalToggle}>
                <FontAwesome name='minus-circle' />
                <span>Remove Article</span>
              </a>
            </div>
          ) : (
            <div id={this.props.collectionId} className={classNames(this.state.dropdownClass, 'collections-collection-dropcontent')} ref={this.props.collectionId}>
              <a onClick={() => this.props.renameCollection(this.props.collectionId)}>
                <FontAwesome name='edit' />
                <span>Rename Collection</span>
              </a>
              <a className='remove-collection' onClick={this.deleteModalToggle}>
                  <FontAwesome name='minus-circle' />
                  <span>Remove Collection</span>
                </a>
            </div>
          )}
          { this.state.isModalVisible &&
            <CollectionsDeleteModal collection={this.props.collection} article={this.props.article} deleteType={this.props.dropDownType} onCloseModal={this.deleteModalToggle} removeArticle={(collectionId, articleId) => this.props.removeArticle(collectionId, articleId)}/>
          }
        </div>
    )
  }

}

export default requiresLogin()(connect()(CollectionsDropdown));