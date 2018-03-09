import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import CollectionsDropdown from './collections-dropdown';
import CollectionArticlesResponsive from './collection-articles-responsive';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';

export class AllCollections extends React.Component {

  render() {

    let allCollectionsList;

    if (this.props.collections.length !== 0){

      allCollectionsList = this.props.collections.map((data, index) => {

        const collection = data;
        const collectionId = data._id;

        if (data.collectionArticles.length !== 0 && data.collectionArticles[0].image) {

          return (
            <div key={shortid.generate()} className="collections-detail-parent">
              <div className={index === parseInt(this.props.featuredCollectionIndex, 10)? 'selected-all-collections-detail' : 'all-collections-detail'} key={shortid.generate()}>
                <div className="list-img">
                  <img src={data.collectionArticles[0].image} alt={data.collectionArticles[0].title}/>
                </div>
                <a className='all-collections-title' onClick={() => this.props.changeFeaturedCollection(index)}>
                  <li>{data.collectionTitle}</li>
                </a>
                <CollectionsDropdown dropDownType="collection"
                  collection={collection}
                  collectionId={collectionId}
                  renameCollection={(collectionId) => this.props.renameCollection(collectionId)}
                  removeCollection={(collectionId) => this.props.removeCollection(collectionId)}
                />
              </div>             
              <div className={index === parseInt(this.props.featuredCollectionIndex, 10)? 'selected-collection-articles' : 'collection-articles'} key={shortid.generate()}>
                <CollectionArticlesResponsive collectionIndex={index} removeArticle={(collectionId, articleId) => this.props.removeArticle(collectionId, articleId)}/>
              </div>
            </div>
          )
          } else {
          return (
            <div className="collections-detail-parent">
              <div className={index === parseInt(this.props.featuredCollectionIndex, 10)? 'selected-all-collections-detail' : 'all-collections-detail'} key={shortid.generate()}>
              <div className="list-img">
                  <img src="../../images/default.png" alt="default"/>
                </div>
                <a className='all-collections-title' onClick={() => this.props.changeFeaturedCollection(index)}>
                  <li>{data.collectionTitle}</li>
                </a>
                <CollectionsDropdown dropDownType="collection"
                  collection={collection}
                  collectionId={collectionId}
                  renameCollection={(collectionId) => this.props.renameCollection(collectionId)}
                  removeCollection={(collectionId) => this.props.removeCollection(collectionId)}
                />
              </div>
              <div className={index === parseInt(this.props.featuredCollectionIndex, 10)? 'selected-collection-articles' : 'collection-articles'} key={shortid.generate()}>
                <CollectionArticlesResponsive collectionIndex={index} removeArticle={(collectionId, articleId) => this.props.removeArticle(collectionId, articleId)} />
              </div>
            </div>
          )
        }
      })
    } else {
      allCollectionsList =
        <div className="all-collection-detail" key={shortid.generate()}>
          <span>No more collections found... why not create some more?</span>
          <FontAwesome name='smile' size='2x'/>
        </div>
    }

    return (
      <div className="all-collections-list">
        {allCollectionsList}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    collections: state.collections.collections
  }
}

export default requiresLogin()(connect(mapStateToProps)(AllCollections));