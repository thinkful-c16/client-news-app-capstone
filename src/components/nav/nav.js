import React from 'react';
import {connect} from 'react-redux';

import NavHeader from './nav-header';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavHeader />
    )};
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);