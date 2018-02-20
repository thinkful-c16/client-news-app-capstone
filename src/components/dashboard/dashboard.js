import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
//remove Dashboard from app.js

export class Dashboard extends React.Component{
  componentDidMount() {
    //this.props.dispatch(getTopHeadlines());
  }

  render() {
    const headlinesList = this.props.headlines.map(headline => {
      return <li key={shortid.generate()}>
        <a href={headline.url} target="_blank">
          <img src={headline.urlToImage} width='100' alt={headline.title} />
          {headline.title}
        </a>
      </li>
    });
    
    return(
      <div className='dashboard'>
        <h2>Today's Top Headlines</h2>
        <ul>
          {headlinesList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    headlines: [
      {
          "source": {
              "id": null,
              "name": "Sfgate.com"
          },
          "author": "",
          "title": "The Latest: Trump tells Pa. Republicans to challenge new map",
          "description": "HARRISBURG, Pa. (AP) - The Latest on redistricting in Pennsylvania (all times local):\n2:30 p.m.\nFederal and state Republican Party officials are expected to sue to contest a Pennsylvania court's redrawing of the state's 18 congressional districts.\nThe Nationa…",
          "url": "https://www.sfgate.com/news/article/The-Latest-Trump-tells-Pa-Republicans-to-12626713.php",
          "urlToImage": "https://s.hdnux.com/photos/71/47/35/15103868/3/rawImage.jpg",
          "publishedAt": "2018-02-20T19:58:09Z"
      },
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": "Eileen Sullivan and Kenneth P. Vogel",
          "title": "Former Skadden Lawyer Accused in Russia Investigation of Making False Statements",
          "description": "The attorney was interviewed by the special counsel about work he did in Ukraine with Rick Gates, who went on to serve on President Trump’s campaign.",
          "url": "https://www.nytimes.com/2018/02/20/us/politics/alex-van-der-zwaan-gates-russia-mueller.html",
          "urlToImage": "https://static01.nyt.com/images/2018/02/21/us/politics/21dc-mueller1/21dc-mueller1-facebookJumbo.jpg",
          "publishedAt": "2018-02-20T19:32:00Z"
      }
    ]
  }
}

export default connect(mapStateToProps)(Dashboard);