import React, { Component } from "react";
import Name from "./../Name";
import Image from "../Image";
import Description from "../Description";

class UserCard extends Component {
  render() {
    const { id, firstName, lastName, profilePicture, contacts } = this.props;

    return (
      <div className = "usercardWrapper">
        <Image 
          profilePicture={profilePicture}
          firstName={firstName}
          lastName={lastName}
        />
        <Name firstName={firstName} lastName={lastName} />
        <Description />
      </div>
    );
  }
}

export default UserCard;
