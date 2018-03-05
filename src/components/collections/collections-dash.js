import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';
import CollectionsCreateModal from './collections-create-modal';
import CollectionsRenameModal from './collections-rename-modal';
import * as actions from '../../actions/collections';

import '../../styles/collections-dash.css';

export class CollectionsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateModalVisible: false,
      isRenameModalVisible: false,
      featuredIndex: 0,
      collectionToRename: null
    }
    this.renameModalToggle = this.renameModalToggle.bind(this);
    this.createModalToggle = this.createModalToggle.bind(this);
    this.renameCollection = this.renameCollection.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.removeCollection = this.removeCollection.bind(this);
    this.changeFeatured = this.changeFeatured.bind(this);
  }

  createModalToggle() {
    this.setState({
      isCreateModalVisible: !this.state.isCreateModalVisible 
    });
  }

  renameModalToggle() {
    console.log('made it');
    this.setState({
      isRenameModalVisible: !this.state.isRenameModalVisible 
    });
  }

  renameCollection(collectionId) {
    this.setState({
      collectionToRename: collectionId
    })
    this.renameModalToggle();
  }

  removeCollection(e) {
    console.log(e.currentTarget.id);
    const collectionId = e.currentTarget.id;
    this.props.dispatch(actions.deleteCollection(collectionId));
    this.setState({
      featuredIndex: 0
    })
  }

  removeArticle(collectionId, articleId) {
    this.props.dispatch(actions.deleteFromCollection(collectionId, articleId));
  }

  changeFeatured(e) {
    const index = e.currentTarget.id;
    console.log('hiya', index);
    this.setState({
      featuredIndex: index
    })
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

    let featArticle;
    let featArticleList;
    let allCollectionsList; 

    if (this.props.collections.length !== 0){

      if (this.props.collections[this.state.featuredIndex].collectionArticles.length !== 0) {

        const collectionId = this.props.collections[this.state.featuredIndex]._id;

        featArticle =
          <div className="featured-article">
            <h1>{this.props.collections[this.state.featuredIndex].collectionTitle}</h1>
            <img src={this.props.collections[this.state.featuredIndex].collectionArticles[0].image} alt={this.props.collections[this.state.featuredIndex].collectionArticles[0].title}/>
            <div className="edit-title" onClick={() => this.renameCollection(collectionId)}>
              <FontAwesome name='edit'/>
              <p>edit title</p>
            </div>
          </div>

        featArticleList = this.props.collections[this.state.featuredIndex].collectionArticles.map(data => {

          const articleId = data._id;

          return(
          <div className="article-list-detail" key={shortid.generate()}>
            <li>
            {data.title}
            </li>
            <a className='remove-article' onClick={() => this.removeArticle(collectionId, articleId)}>
                <FontAwesome name='minus-circle' />
            </a>
          </div>
          )
        })
      }
      if (this.props.collections[this.state.featuredIndex].collectionArticles.length === 0) {

        const collectionId = this.props.collections[this.state.featuredIndex]._id;

        featArticle =
          <div className="feature-article">
            <h1>{this.props.collections[0].collectionTitle}</h1>
            <div className="edit-title" onClick={() => this.renameCollection(collectionId)}>
              <FontAwesome name='edit'/>
              <p>edit title</p>
            </div>
          </div>

        featArticleList =
          <div className="article-list-detail" key={shortid.generate()}>
            <li>
            No articles found in this collection. You should add some!
            </li>
          </div>
          
      }
    }
    if (this.props.collections.length >= 1) {

      let toReturn;
      let collectionIndex = 0;

      allCollectionsList = this.props.collections.map(data => {

        if (data.collectionArticles.length !== 0 && data.collectionArticles[0].image) {
          toReturn =
            <div className="all-collections-detail" key={shortid.generate()}>
              <div className="list-img">
                <img src={data.collectionArticles[0].image} alt={data.collectionArticles[0].title}/>
              </div>
              <a className='all-collections-title' id={collectionIndex} onClick={this.changeFeatured}>
                <li>{data.collectionTitle}</li>
              </a>
              <a className='remove-collection' id={data._id} onClick={this.removeCollection}>
                <FontAwesome name='minus-circle' />
              </a>
            </div>
        } else {
          toReturn =
              <div className="all-collections-detail" key={shortid.generate()}>
                <li>{data.collectionTitle}</li>
                <a className='remove-collection' id={data._id} onClick={this.removeCollection}>
                  <FontAwesome name='minus-circle' />
                </a>
              </div>
        }
      collectionIndex += 1;
      return(toReturn);
      })
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
            <a onClick={this.createModalToggle}>
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
                {featArticle}
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

        { this.state.isCreateModalVisible &&
            <CollectionsCreateModal onCloseModal={this.createModalToggle}/>
        }
        { this.state.isRenameModalVisible &&
            <CollectionsRenameModal onCloseModal={this.renameModalToggle} collectionId={this.state.collectionToRename}/>
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