import React, { Component } from 'react';

class Hello extends Component {

  // lifecyle method: called when the component is mounted
  componentDidMount() {
    console.log('Hello component mounted');
  }

  componentWillUnmount() {
    console.log('Hello component unmounted');
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHello: true
    }
  }

  handleToggle = () => {
    this.setState({
      showHello: !this.state.showHello
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle Hello</button>
        {this.state.showHello && <Hello />}
      </div>
    )
  }
}

export default App;