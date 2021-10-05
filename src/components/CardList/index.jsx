import React, { Component } from "react";
import UserCard from "../Usercard";

class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <section>
        {users.map((user) => {
          return <UserCard
            key={user.id}
            profilePicture={user.profilePicture}
            fullName={user.firstName + " " + user.lastName}
          />;
        })}
      </section>
    );
  }
}

export default CardList;
