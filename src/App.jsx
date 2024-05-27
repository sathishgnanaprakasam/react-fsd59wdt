import React, { Component } from 'react';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  // componentDidMount is a lifecycle method that is called after the component is rendered
  componentDidMount() {
    console.log('Component did mount');
  }

  // componentDidUpdate is a lifecycle method that is called after the component is updated
  componentDidUpdate() {
    console.log('Component did update');
  }

  // componentWillUnmount is a lifecycle method that is called before the component is removed from the DOM
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleIncrement = () => {
    this.setState({
        count: this.state.count + 1
      })
  }


  render() {

    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default App;