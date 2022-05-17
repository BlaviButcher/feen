import { Component } from "react";

class PropExample extends Component {
  render() {
    this.props.callback();
    let prop1Given = this.props.prop1;
    let prop2Given = this.props.prop2;
    return (
      <div className="PropExample">
        <div>I contain a prop that is equal to: {prop1Given}</div>
        <div>I contain a a prop that is equal to: {prop2Given}</div>
      </div>
    );
  }
}

export default PropExample;
