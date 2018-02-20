import React from 'react';
import {connect} from 'react-redux';

import NavHeader from './nav-header';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <NavHeader />
        {this.props.loggedIn &&
          <NavLinks />
          <NavUser />
        }
      </div>
    )};
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);