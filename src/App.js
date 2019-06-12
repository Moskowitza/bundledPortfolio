import React, { Component } from 'react';

class App extends Component {
  state={
    name: 'aaron',
  }

  render() {
    const { name } = this.state;
    return (<h2>{name}</h2>);
  }
}


export default App;
