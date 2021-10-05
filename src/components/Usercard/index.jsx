import React, { Component } from "react";
import PropTypes from "prop-types"
import Image from "../Image";
import Description from "../Description";

class UserCard extends Component {
  render() {
    const { fullName, profilePicture } = this.props;
    return (
      <div className="usercardWrapper">
        <Image
          profilePicture={profilePicture}
          fullName={fullName}
        />
        <h1 className="fullName">
          {fullName}
        </h1>
        <Description />
      </div>
    );
  }
}

UserCard.propTypes ={
  fullName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
}
export default UserCard;
