import React, { Component } from 'react';

class Description extends Component {
  render() {
    const textDescription = "Lorem ipsum I forgot what words are there next so bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla"
    return (
      <section className="descriptionText">
        {textDescription}
      </section>
    );
  }
}

export default Description;
