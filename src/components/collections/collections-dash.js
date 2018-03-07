import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';
import FeaturedCollection from './featured-collection';
import AllCollections from './all-collections';
import CollectionsCreateModal from './collections-create-modal';
import CollectionsRenameModal from './collections-rename-modal';
import * as actions from '../../actions/collections';
import '../../styles/fa/fontawesome-all.css';
import '../../styles/collections-dash.css';

export class CollectionsDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isCreateModalVisible: false,
      isRenameModalVisible: false,
      featuredCollectionIndex: 0,
      featuredArticleIndex: 0,
      collectionToRename: null
    }
    this.renameModalToggle = this.renameModalToggle.bind(this);
    this.createModalToggle = this.createModalToggle.bind(this);
    this.renameCollection = this.renameCollection.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.removeCollection = this.removeCollection.bind(this);
    this.changeFeaturedCollection = this.changeFeaturedCollection.bind(this);
    this.changeFeaturedArticle = this.changeFeaturedArticle.bind(this);
  }

  createModalToggle() {
    this.setState({
      isCreateModalVisible: !this.state.isCreateModalVisible 
    });
  }

  renameModalToggle() {
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

  removeCollection(collectionId) {
    this.props.dispatch(actions.deleteCollection(collectionId));
    this.setState({
      featuredCollectionIndex: 0,
      featuredArticleIndex: 0
    })
  }

  removeArticle(collectionId, articleId) {
    this.props.dispatch(actions.deleteFromCollection(collectionId, articleId));
    this.setState({
      featuredArticleIndex: 0
    })
  }

  changeFeaturedCollection(collectionIndex) {
    this.setState({
      featuredCollectionIndex: collectionIndex,
      featuredArticleIndex: 0
    })
  }

  changeFeaturedArticle(articleIndex) {
    this.setState({
      featuredArticleIndex: articleIndex
    })
  }

  componentWillMount() {
    this.props.dispatch(actions.fetchCollections());
  }

  render() {

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
              <FeaturedCollection 
                featuredCollectionIndex={this.state.featuredCollectionIndex}
                featuredArticleIndex={this.state.featuredArticleIndex}
                renameCollection={(collectionId) => this.renameCollection(collectionId)}
                changeFeaturedArticle={(articleIndex) => this.changeFeaturedArticle(articleIndex)}
                removeArticle={(collectionId, articleId) => this.removeArticle(collectionId, articleId)}
              />
              <AllCollections
                featuredCollectionIndex={this.state.featuredCollectionIndex} 
                changeFeaturedCollection={(collectionIndex) => this.changeFeaturedCollection(collectionIndex)}
                removeCollection={(collectionId) => this.removeCollection(collectionId)}
                removeArticle={(collectionId, articleId) => this.removeArticle(collectionId, articleId)}
              />
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