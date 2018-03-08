import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import shortid from 'shortid';

import CollectionsDropdown from './collections-dropdown';

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
          <CollectionsDropdown dropDownType="article"
            collectionId={collectionId}
            articleId={articleId}
            article={article}
            removeArticle={(collectionId, articleId) => this.props.removeArticle(collectionId, articleId)}
          />
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