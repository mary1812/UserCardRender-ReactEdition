import React, { Component } from "react";
import PropTypes from "prop-types"
import Image from "../Image";
import Description from "../Description";

class UserCard extends Component {
  render() {
    const { firstName, lastName, profilePicture } = this.props;
    return (
      <div className="usercardWrapper">
        <Image
          profilePicture={profilePicture}
          firstName={firstName}
          lastName={lastName}
        />
        <h1 className="fullName">
          {firstName}
          {lastName}
        </h1>
        <Description />
      </div>
    );
  }
}

UserCard.propTypes ={
  firstName: PropTypes.string,
  lastName: PropTypes.string
}
export default UserCard;
