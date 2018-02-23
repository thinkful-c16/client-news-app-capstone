import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';

import '../../styles/collections-dash.css';

const dummyCollectionData = [
    {
        "collectionTitle": "Interesting Reads",
        "collectionArticles":
            [{
            "title": "This is an Article Headline",
            "author": "New York Times",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris",
            "image": "http://www.petguide.com/wp-content/uploads/2014/10/cutest-dog-breeds-main.jpg",
            
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

    const featArticleList = dummyCollectionData[0].collectionArticles.map(data => {
      return(
      <div className="article-list-detail">
        <li>
        {data.title}
        </li>
      </div>
      )
    })
    
    const allCollectionsList = dummyCollectionData.map(data => {
      return(
        <div className="all-collections-detail">
          <div className="list-img">
            <img src={data.collectionArticles[0].image} />
          </div>
          <li>{data.collectionTitle}</li>
        </div>
      )
    })

    return(
      <div className="collections-dash-container">
        <h1 className="collections-head">My Collections</h1>
        <div className="featured-collection">
          <div className="featured-article">
            <h1>{dummyCollectionData[0].collectionTitle}</h1>
            <img src={dummyCollectionData[0].collectionArticles[0].image} />
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
}

export default requiresLogin()(connect()(CollectionsDashboard));