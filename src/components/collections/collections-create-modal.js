import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import * as actions from '../../actions/collections';

import '../../styles/collections-create-modal.css'

export class CollectionsCreateModal extends React.Component {

  render() {
    return (
    <div>
      <div className="modal-div">
        <h3>Create Collection</h3>
        <a className="modal-close-clickable" onClick={this.props.onClick}>
          <FontAwesome name='times' size='2x'/>
        </a>
        <div className="modal-top-line"></div>
        <form>
          <label className="collection-name-label" htmlFor="collectionNameInput">Name</label>
          <input type="text" className="collection-name-input" id="collectionNameInput"/>
        </form>
      </div>
      <div className="backdrop-div">
      </div>
    </div>
    )
  }
}

export default requiresLogin()(connect()(CollectionsCreateModal));