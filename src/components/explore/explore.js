import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import {fetchActivities} from '../../actions/activity';
import FontAwesome from 'react-fontawesome';
import '../../styles/explore.css';
//remove Dashboard from app.js

export class Explore extends React.Component{
  componentWillMount() {
    console.log(fetchActivities());
    // this.props.dispatch(fetchActivities());
  }

  render() {
    return(
      <div className="explore">
        <div className="all-activities">
        </div>
        <div className="search-window">
          <div className="my-friend-info">
            <h3>You are following 0 people and you have 0 followers.</h3>
          </div>
          <div className="friend-search">
            <h7>Search for friends to follow:</h7>
            <input type="text" id="friendSearchInput" placeholder="Enter Name Here" />
            <button className="search-icon" onClick={() => console.log('searching for friend')}><FontAwesome name='search' /></button>
          </div>
        </div>
      </div>
    )
  }
}

//   render() {
//     const exploreList = this.props.exploreData.map(item => {
//       return <li key={shortid.generate()}>
//         <span>{item.user} {item.activity} this article:</span>
//         <a href={item.article.url} target="_blank">
//           <img src={item.article.urlToImage} width='100' alt={item.title} />
//           {item.article.title}
//         </a>
//       </li>
//     });
    
//     return(
//       <div className='explore'>
//         <h2>Explore</h2>
//         <ul>
//           {exploreList}
//         </ul>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state, props) => {
//   return {
//     activities: state.activities.activities
//   }
// }

export default connect()(Explore);