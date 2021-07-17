import React, { Component } from "react";
// import "./Counter.css";

interface Props {
  initialValue: number;
  step: number;
}

interface State {
  value: number;
}

export default class Quantity extends Component<Props, State> {
  static defaultProps = {
    initialValue: 0,
    step: 1
  };

  state = {
    value: this.props.initialValue
  };

  increment = () => this.setState(({ value }) => ({ value: value + 1 }));

  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    const { value } = this.state;
    const { step } = this.props;

    return (
      <div className="">
        <span className="">{value}</span>

        <div className="">
          <button type="button" onClick={this.increment}>
            Увеличить на {step}
          </button>
          <button type="button" onClick={this.decrement}>
            Уменьшить на {step}
          </button>
        </div>
      </div>
    );
  }
}
