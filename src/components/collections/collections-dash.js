import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';
import CollectionsCreateModal from './collections-create-modal';
import * as actions from '../../actions/collections';

import '../../styles/collections-dash.css';

export class CollectionsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
    this.modalToggle = this.modalToggle.bind(this);
    this.removeCollection = this.removeCollection.bind(this);
  }

  modalToggle() {
    this.setState({
      isModalVisible: !this.state.isModalVisible 
    });
  }

  removeCollection(e) {
    console.log(e.currentTarget.id)
    const collectionId = e.currentTarget.id;
    this.props.dispatch(actions.deleteCollection(collectionId));
  }

  // componentDidUpdate() {
  //   console.log('update');
  //   this.props.dispatch(actions.fetchCollections());
  // }

  componentWillMount() {
    console.log('hi');
    this.props.dispatch(actions.fetchCollections());
  }

  render() {

    let featArticleList;
    let allCollectionsList;

    if (this.props.collections.length !== 0){

      if (this.props.collections[0].collectionArticles.length !== 0) {
        featArticleList = this.props.collections[0].collectionArticles.map(data => {
          return(
          <div className="article-list-detail" key={shortid.generate()}>
            <li>
            {data.title}
            </li>
          </div>
          )
        })
      }
      if (this.props.collections[0].collectionArticles.length === 0) {
        featArticleList =
          <div className="article-list-detail" key={shortid.generate()}>
            <li>
            No articles found in this collection. You should add some!
            </li>
          </div>
          
      }
    }
    if (this.props.collections.length >= 1) {
      allCollectionsList = this.props.collections.map(data => {
        if (data.collectionArticles.length !== 0 && data.collectionArticles[0].image) {
          return(
            <div className="all-collections-detail" key={shortid.generate()}>
              <div className="list-img">
                <img src={data.collectionArticles[0].image} alt={data.collectionArticles[0].title}/>
              </div>
              <li>{data.collectionTitle}</li>
              <a className='remove-collection' id={data._id} onClick={this.removeCollection}>
                <FontAwesome name='minus-circle' size='2x'/>
              </a>
            </div>
          )
        } else {
          return(
              <div className="all-collections-detail" key={shortid.generate()}>
                <li>{data.collectionTitle}</li>
                <a className='remove-collection' id={data._id} onClick={this.removeCollection}>
                  <FontAwesome name='minus-circle' size='2x'/>
                </a>
              </div>
          )
        }})
    } else {
      featArticleList = 
        <div className="article-list-detail" key={shortid.generate()}>
          <span>No articles found in collection. Add some!</span>
        </div>

      allCollectionsList =
        <div className="all-collection-detail" key={shortid.generate()}>
          <span>No more collections found... why not create some more?</span>
          <FontAwesome name='smile' size='2x'/>
        </div>
    }

    return(
        <div className="parent-coll-container">
          <div className="add-collection-div">
            <a onClick={this.modalToggle}>
              <FontAwesome name='plus-square' size='2x'/>
            </a>
            <h3>Add a collection</h3>
          </div>

        { this.props.collections.length === 0 ? (
          <div  className="noCollections-dash-container">
              <h1>
                Uh oh! It looks like you don't have any collections!
              </h1>
              <p>
                Please create a new collection by clicking "add a collection" up above. Go on, we know you want to!
              </p>
          </div>) : (

            <div className="collections-dash-container">
              <h1 className="collections-head">My Collections</h1>
              <div className="featured-collection">
                { this.props.collections[0].collectionArticles.length !== 0 ? (
                  <div className="featured-article">
                      <h1>{this.props.collections[0].collectionTitle}</h1>
                      <img src={this.props.collections[0].collectionArticles[0].image} />
                      <div className="see-more">
                        <p>...</p>
                      </div>
                  </div>
                ) : (
                  <div className="feature-article">
                    <h1>{this.props.collections[0].collectionTitle}</h1>
                  </div>
                )}
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

        { this.state.isModalVisible &&
            <CollectionsCreateModal onCloseModal={this.modalToggle}/>
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