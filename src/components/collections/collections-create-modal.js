import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import * as actions from '../../actions/collections';

import '../../styles/collections-create-modal.css'

export class CollectionsCreateModal extends React.Component {

  render() {
    return (
    <div>
      <div className="modal-div">
        <span>Create Collection</span>
        <form>
          <label> Name:
            <input type="text" id="collectionNameInput" />
          </label>
        </form>
      </div>
      <div className="backdrop-div">
      </div>
    </div>
    )
  }
}

export default requiresLogin()(connect()(CollectionsCreateModal));