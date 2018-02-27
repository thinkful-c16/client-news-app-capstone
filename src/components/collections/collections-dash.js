import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import * as actions from '../../actions/collections';

import '../../styles/collections-dash.css';

export class CollectionsDashboard extends React.Component {

  componentWillMount() {
    console.log('hi');
    // this.props.dispatch(actions.fetchCollections());
  }

  render() {

    let featArticleList;
    let allCollectionsList;

    if (this.props.collections.length !== 0){
      featArticleList = this.props.collections[0].collectionArticles.map(data => {
        return(
        <div className="article-list-detail">
          <li>
          {data.title}
          </li>
        </div>
        )
      })

      allCollectionsList = this.props.collections.map(data => {
        return(
          <div className="all-collections-detail">
            <div className="list-img">
              <img src={data.collectionArticles[0].image} />
            </div>
            <li>{data.collectionTitle}</li>
          </div>
        )
      })

    }

    return(
        <div className="parent-coll-container">

        { this.props.collections.length === 0 ? (
          <div  className="noCollections-dash-container">
              <h1>
                Please create a collection
              </h1>
              <div className="add-collection-div">
                <a>
                  <FontAwesome name='plus-square' size='2x'/>
                </a>
                <h3>Add a collection</h3>
              </div>
          </div>) : (

            <div className="collections-dash-container">
              <h1 className="collections-head">My Collections</h1>
              <div className="featured-collection">
                <div className="featured-article">
                  <h1>{this.props.collections[0].collectionTitle}</h1>
                  <img src={this.props.collections[0].collectionArticles[0].image} />
                  <div className="see-more">
                    <p>...</p>
                  </div>
                </div>
                <div className="featured-article-list">
                {featArticleList}
                </div>
              </div>
              <div className="all-collections-list">
                {allCollectionsList}
              </div>
            </div>

          )
        }

        </div>
      )
    }
  }

const mapStateToProps = (state, props) => {
  return {
    collections: state.collections.collections
  }
}

export default requiresLogin()(connect(mapStateToProps)(CollectionsDashboard));