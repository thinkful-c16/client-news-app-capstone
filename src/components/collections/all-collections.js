import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';

export class AllCollections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let allCollectionsList;

    if (this.props.collections.length !== 0){

      allCollectionsList = this.props.collections.map((data, index) => {

        if (data.collectionArticles.length !== 0 && data.collectionArticles[0].image) {
          return (
            <div className={index === parseInt(this.props.featuredCollectionIndex, 10)? 'selected-all-collections-detail' : 'all-collections-detail'} key={shortid.generate()}>
              <div className="list-img">
                <img src={data.collectionArticles[0].image} alt={data.collectionArticles[0].title}/>
              </div>
              <a className='all-collections-title' onClick={() => this.props.changeFeaturedCollection(index)}>
                <li>{data.collectionTitle}</li>
              </a>
              <a className='remove-collection' onClick={() => this.props.removeCollection(data._id)}>
                <FontAwesome name='minus-circle' />
              </a>
            </div>
          )
          } else {
          return (
            <div className={index === parseInt(this.props.featuredCollectionIndex, 10)? 'selected-all-collections-detail' : 'all-collections-detail'} key={shortid.generate()}>
              <a className='all-collections-title' onClick={() => this.props.changeFeaturedCollection(index)}>
                <li>{data.collectionTitle}</li>
              </a>
              <a className='remove-collection' onClick={() => this.props.removeCollection(data._id)}>
                <FontAwesome name='minus-circle' />
              </a>
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