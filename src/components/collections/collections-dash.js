import React from 'react';
import { connect } from 'react-redux';

import '../../styles/collections-dash.css';

const dummyCollectionData = [
    {
        "collectionTitle": "Interesting Reads",
        "collectionArticles":
            [{
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2014/10/cutest-dog-breeds-main.jpg"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2014/10/cutest-dog-breeds-main.jpg"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2014/10/cutest-dog-breeds-main.jpg"
            }]
    },
    {
        "collectionTitle": "Funny Stories",
        "collectionArticles":
            [{
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "https://iheartdogs.com/wp-content/uploads/2015/01/Screenshot-2015-01-17-16.15.29.png"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "https://iheartdogs.com/wp-content/uploads/2015/01/Screenshot-2015-01-17-16.15.29.png"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "https://iheartdogs.com/wp-content/uploads/2015/01/Screenshot-2015-01-17-16.15.29.png"
            }]
    },
    {
        "collectionTitle": "Inspiration",
        "collectionArticles":
            [{
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://cdn.skim.gs/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_940/v1456335853/msi/Cavalier_King_Charles_Spaniel_wvectl.jpg"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://cdn.skim.gs/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_940/v1456335853/msi/Cavalier_King_Charles_Spaniel_wvectl.jpg"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://cdn.skim.gs/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_940/v1456335853/msi/Cavalier_King_Charles_Spaniel_wvectl.jpg"
            }]
    },
    {
        "collectionTitle": "Read later",
        "collectionArticles":
            [{
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-11.jpg"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-11.jpg"
            }, {
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-11.jpg"
            }]
    }
]

export class CollectionsDashboard extends React.Component {
  componentDidMount() {
    //function dispatch to get collections
  }

  render() {

    const featArticleList = dummyCollectionData.collectionArticles.map(data => {
      return <div className="article-list-deail"></div>
    })
    

    return(
      <div className="collections-dash-container">
        <h1>My Collections</h1>
        <div className="featured-collection">
          <div className="featured-article">
            <h2 className="feat-article-head">{dummyCollectionData.collectionTitle}</h2>
            <img src={dummyCollectionData.collectionArticles[0].image} />
            <div className="see-more"></div>
          </div>
          <div className="featured-article-list">
            {featArticleList}
          </div>
        </div>
        <div className="all-collections-list">
        </div>
      </div>
    )
  }
}