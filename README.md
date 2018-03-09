# NEWS SPOT
<p align='center'>
    <img width='600' height='450'src='https://i.imgur.com/O8tRSSf.png'>	
</p>

## PURPOSE

A event-driven platform in which users can discover, curate and share news stories. In an effort to combat the increasingly pessisistic view of news sources, the application allows users to have unfiltered access to over [5,000+ news sources](https://newsapi.org/sources). See a stream of activity from other users. Uncover insights of what your fellow citizens are reading and sharing at the News Spot.

### Demo Account login information
```
login: demo@demo.com
password: demo123456
```

[LIVE Demo](https://newsspot.netlify.com/)


## TECH STACK
* React via [Create React App](https://github.com/facebookincubator/create-react-app)
* Redux
* Node.js/Express 
* MongoDB/Mongoose
* Mocha/Chai for server-side testing

## API
* [News API](https://newsapi.org/)
* [News Spot Backend](https://github.com/thinkful-cohort-16/server-news-app-capstone)

When a user logs into the News Spot, they'll see the top headlines of the day. From there, the app maintains a RESTFul API on the backend to allow users to ping the open sourced News API to search by keyword and category. With support from our backend, users may share links, create 'collections' of stories they want to save, and add/delete articles from those collections.


### TL;DR
Server supports the following: 

* GET news stories and your collections
* POST shared stories, new collections and articles to your collections
* UPDATE the titles of your collections
* DELETE entire collections or specific articles from a collection

TODO: 

* Add support for a visual representation of stories you've shared and saved to gather insight about the news you consume 
* Add support for following other users and saving their collections as your own

## CLIENT FOLDER STRUCTURE

```
    my-app/
      README.md
      node_modules/
      package.json
      public/
         images/
         index.html
         favicon.ico
      src/
         actions/
         components/
            activity/
            auth/
            collections/
            dashboard/
            explore/
            nav/
            search/
            app.js
         reducers/
         styles/
         index.js
         store.js
         config.js
```

## SERVER FOLDER STRUCTURE

[Link to the Backend](https://github.com/thinkful-cohort-16/server-news-app-capstone)

```
    my-server/
      README.md
      node_modules/
      package.json
      index.js
      api-router.js
      db-mongoose.js
      config.js
      activity/
         index.js
         model.js
         router.js
      auth/
         strategies/
            local.js
         index.js
         router.js
      collections/
         index.js
         router.js
      test/
      users/
         index.js
         model.js
         router.js
```

## CONTRIBUTE?

Install Node and npm, clone/fork the repo and run the following command in your project folder to install all of the dependencies:
    
    `npm install`

## ACKNOWLEDGEMENTS
Shouts to open source community for any code borrowed, libraries used, etc..

## DEVS 

* [Wade C](https://github.com/owcollier)
* [Nicole G](https://github.com/nicoledanielle)
* [Kayla W](https://github.com/webbkyr)