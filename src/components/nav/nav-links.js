import React from 'react';
import Media from 'react-media';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../styles/nav.css';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

export class NavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileDropClass: 'hidden',
      mobileArrow: <FontAwesome name='chevron-circle-down'/>
    }
    this.toggleDrop = this.toggleDrop.bind(this);
  }

  componentDidMount() {
    this.setState({
      mobileDropClass: 'hidden',
      mobileArrow: <FontAwesome name='chevron-circle-down'/>
    })
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  toggleDrop() {
    if (this.state.mobileDropClass === "hidden") {
      this.setState({mobileDropClass: "show", mobileArrow: <FontAwesome name='chevron-circle-up'/>})
    }
    else{
      this.setState({mobileDropClass: "hidden", mobileArrow: <FontAwesome name='chevron-circle-down'/>})
    }
  }

  render() {
    return (
      <div className="nav-links">
        <Media query={{ maxWidth: 768 }}>
         {matches => 
            matches ? (
              <div>
                <div className='mobile-arrow' onClick={this.toggleDrop}>
                  {this.state.mobileArrow}
                </div>
                <div className={classNames(this.state.mobileDropClass, 'mobile-nav-drop')}>
                  <div className="mobile-links">
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/collections">MY COLLECTIONS</Link>
                    <Link to="/explore">ACTIVITY</Link>
                    <a onClick={() => this.logOut()}>LOG OUT</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="desktop-links">
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to ="/collections">MY COLLECTIONS</Link>
              </div>
            )
          }
        </Media>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  userName: `${state.auth.currentUser.firstName} ${state.auth.currentUser.lastName}`,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavLinks);
