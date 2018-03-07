import React from 'react';
import Media from 'react-media';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';

export class CollectionArticlesResponsive extends React.Component {

  render() {

    const collectionId = this.props.collections[this.props.collectionIndex]._id;

    const articleList = this.props.collections[this.props.collectionIndex].collectionArticles.map(article => {

      const articleId = article._id;

      return (
        <div className="responsive-article-list-detail" key={shortid.generate()}>
          <li>
          {article.title}
          </li>
          <a className='remove-article' onClick={() => this.props.removeArticle(collectionId, articleId)}>
              <FontAwesome name='minus-circle' />
          </a>
        </div>
      )
    })

    return(
      <div className='responsive-article-list'>
        {articleList}
      </div>
    )

  }

}

const mapStateToProps = (state, props) => {
  return {
    collections: state.collections.collections
  }
}

export default requiresLogin()(connect(mapStateToProps)(CollectionArticlesResponsive));