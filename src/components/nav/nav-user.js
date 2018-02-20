import React from 'react';
import {connect} from 'react-redux';

export class NavUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-username">
         Hello {this.props.userName}!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.auth.currentUser.username
});

export default connect(mapStateToProps)(NavUser);

