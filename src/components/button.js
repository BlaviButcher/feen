import { Component } from "react";

class JoelsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <button onClick={() => this.increment()}>
        Clicked: {this.state.count}
      </button>
    );
  }
}

export default JoelsButton;
