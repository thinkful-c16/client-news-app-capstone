import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import * as actions from '../../actions/collections';

import '../../styles/collections-create-modal.css'

export class CollectionsCreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionNameValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({collectionNameValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(actions.createCollection(this.state.collectionNameValue));
    this.props.onCloseModal();
  }

  render() {
    return (
    <div>
      <div className="modal-div">
        <h3>Create Collection</h3>
        <a className="modal-close-clickable" onClick={this.props.onCloseModal}>
          <FontAwesome name='times' size='2x'/>
        </a>
        <div className="modal-top-line"></div>
        <form onSubmit={this.handleSubmit}>
          <label className="collection-name-label" htmlFor="collectionNameInput">Name</label>
          <input type="text" value={this.state.collectionNameValue} onChange={this.handleChange} className="collection-name-input" id="collectionNameInput"/>
          <input type="submit" className="create-collection-submit" value="Create"/>
        </form>
      </div>
      <div className="backdrop-div">
      </div>
    </div>
    )
  }
}

export default requiresLogin()(connect()(CollectionsCreateModal));