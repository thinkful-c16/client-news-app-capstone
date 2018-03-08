import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import * as actions from '../../actions/collections';

import '../../styles/collections-modal.css'

export class CollectionsDeleteModal extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    console.log('deleted')
  }

  render() {
    return (
    <div>
      { this.props.deleteType === 'article' ? (
        <div className="modal-div">
          <h3>Are you sure you'd like to delete {this.props.article.title} from the collection {this.props.collection.collectionTitle}?</h3>
          <a className="modal-close-clickable" onClick={this.props.onCloseModal}>
            <FontAwesome name='times' size='2x'/>
          </a>
          <div className="modal-top-line"></div>
          <div className="modal-delete-buttons">
            <button onClick={() => this.props.removeArticle(this.props.collectionId, this.props.articleId)}>Yes</button>
            <button onClick={this.props.onCloseModal} >No</button>
          </div>
        </div>
      ) : (
        <div className="modal-div">
        <h3>Are you sure you'd like to delete your collection {this.props.collection.collectionTitle}?</h3>
        <a className="modal-close-clickable" onClick={this.props.onCloseModal}>
          <FontAwesome name='times' size='2x'/>
        </a>
        <div className="modal-top-line"></div>
        <div className="modal-delete-buttons">
          <button onClick={() => this.props.removeCollection(this.props.collectionId)}>Yes</button>
          <button onClick={this.props.onCloseModal}>No</button>
        </div>
      </div>
      )}
      <div className="backdrop-div">
      </div>
    </div>
    )
  }
}

export default requiresLogin()(connect()(CollectionsDeleteModal));