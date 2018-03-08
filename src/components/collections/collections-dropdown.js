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
import '../../styles/listitem.css';

export class CollectionsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClass: 'hidden',
      socialDropClass: 'hidden'
    }
    super(props);

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


  render() {
    return (
      <div className='dropdown' ref={this.setWrapperRef}>
          <div className="dropbtn" onClick= {this.toggleDropdown}>
            <FontAwesome name='chevron-circle-down' />
          </div>
          { this.props.dropDownType === "article" ? (
            <div id={this.props.id} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.id}>
              <a target="_blank" href={this.props.article.url}>Read article on {this.props.article.source.name}</a>
              <a href="#" onMouseOver={this.toggleSocial} onClick={this.toggleSocial}>Share to Social Media</a>
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
              <a className='remove-article' onClick={() => this.props.removeArticle(this.props.collectionId, this.props.articleId)}>
                <FontAwesome name='minus-circle' />
                <span>Remove Article</span>
              </a>
            </div>
          ) : (
            <div id={this.props.collectionId} className={classNames(this.state.dropdownClass, 'dropcontent')} ref={this.props.collectionId}>
              <a onClick={() => this.props.renameCollection(this.props.collectionId)}>
                <FontAwesome name='edit' />
                <span>Rename Collection</span>
              </a>
              <a className='remove-collection' onClick={() => this.props.removeCollection(this.props.collectionId)}>
                  <FontAwesome name='minus-circle' />
                  <span>Remove Collection</span>
                </a>
            </div>
          )}
        </div>
    )
  }

}

export default requiresLogin()(connect()(CollectionsDropdown));