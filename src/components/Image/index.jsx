import React, { Component } from 'react';


class Image extends Component {
  render() {
    const {profilePicture, fullName} = this.props;
    return (
      <div className="imgWrapper">
        <img className = "img" src={profilePicture} alt={fullName} />
      </div>
    );
  }
}

export default Image;
