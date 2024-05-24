import { Component } from "react";

class Hello extends Component {
    render() {
      
        console.log(this.props);

    return (
        <h1>Hello {this.props.name}!</h1>
    )
  }
}

export default Hello;