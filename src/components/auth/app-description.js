import React from 'react';
import '../../styles/app-description.css';

export default class AppDescription extends React.Component {
  render() {
    return(
      <div className="app-desc-container">
        <h2 className="share-head">
          Share news in a meaningful way
        </h2>
        <div className="desc-thumb-div">
          <div className="desc-thumbnails"></div>
          <div className="desc-thumbnails"></div>
          <div className="desc-thumbnails"></div>
        </div>
        <div className="desc-paragraph-div">
          <p className="app-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit lorem non turpis sodales, sit amet pretium sem aliquet. Quisque et purus vel ligula gravida tincidunt. Quisque vel semper nunc. Aenean ullamcorper ultrices est at varius. Vivamus sit amet ligula congue risus malesuada volutpat sit amet id ex.</p>
        </div>
      </div>
    )
  }
}