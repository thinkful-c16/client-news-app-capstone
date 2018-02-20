import React from 'react';
import {connect} from 'react-redux';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <span>Hello World, this will be the nav bar!</span>
      </div>
    )};
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);