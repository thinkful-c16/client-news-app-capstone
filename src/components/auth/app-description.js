import React from 'react';
import '../../styles/app-description.css';
import FontAwesome from 'react-fontawesome';

export default class AppDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverClass: 'hidden',
      curateClass: 'hidden',
      shareClass: 'hidden'
    }
    this.toggleDiscover = this.toggleDiscover.bind(this);
    this.toggleCurate = this.toggleCurate.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
  }
  
  toggleDiscover(){
    if (this.state.discoverClass === "hidden") {
      this.setState({discoverClass: "show"})
    }
    else{
      this.setState({discoverClass: "hidden"})
    }
  }

  toggleCurate(){
    if (this.state.curateClass === "hidden") {
      this.setState({curateClass: "show"})
    }
    else{
      this.setState({curateClass: "hidden"})
    }
  }

  toggleShare(){
    if (this.state.shareClass === "hidden") {
      this.setState({shareClass: "show"})
    }
    else{
      this.setState({shareClass: "hidden"})
    }
  }

  render() {

    return(
      <div className="app-desc-container">
        <div className="desc-thumb-div">
          <div className="desc-thumbnails">
            <div className="discover" onMouseOver={this.toggleDiscover} onMouseOut={this.toggleDiscover}>
              <span><FontAwesome name='lightbulb' /></span>
              <span>DISCOVER</span>
            </div>
          </div>
          <div className="desc-thumbnails">
            <div className="curate" onMouseOver={this.toggleCurate} onMouseOut={this.toggleCurate}>
              <span><FontAwesome name='book'/></span>
              <span>CURATE</span>
            </div>
          </div>
          <div className="desc-thumbnails">
            <div className="share" onMouseOver={this.toggleShare} onMouseOut={this.toggleShare}>
              <span><FontAwesome name='share-square'/></span>
              <span>SHARE</span>
            </div>
          </div>
        </div>
        <div className="desc-text">
          <div className={this.state.discoverClass} onMouseOver={this.toggleDiscover}>
            Find news articles by keyword or category from all of the major, reputable media outlets.
          </div>
          <div className={this.state.curateClass} onMouseOver={this.toggleCurate}>
            Create your own collections of news articles to save for later or share.
          </div>
          <div className={this.state.shareClass} onMouseOver={this.toggleShare}>
            Share articles to social media, or see what others are sharing.
          </div>
        </div>
      </div>
    )
  }
}