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
            firstName={user.firstName}
            lastName={user.lastName}
          />;
        })}
      </section>
    );
  }
}

export default CardList;
