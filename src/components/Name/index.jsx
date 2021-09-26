import React, { Component } from 'react';

class Name extends Component {
  render() {
    const {firstName, lastName} = this.props
    return (
      <h1 className="fullName">
        {firstName}{lastName}
      </h1>
    );
  }
}

export default Name;
