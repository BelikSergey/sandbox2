import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";


interface IProps {
  initialValue: number;
  OnChangeInput(a: number): void;
}

interface State {
  value: number;
}

export default class Quantity extends Component<IProps, State> {
  static defaultProps = {
    initialValue: 1
  };

  state = {
    value: this.props.initialValue
  };

  sendValue = (value: number) => this.props.OnChangeInput(value);

  increment = () => {
    const { value } = this.state;
    this.setState(({ value }) => ({ value: value + 1 }));
    this.sendValue(value + 1);
  };

  decrement = () => {
    const { value } = this.state;
    if (value <= 0) {
      this.setState(({ value }) => ({ value: 0 }));
      this.sendValue(0);
    } else {
      this.setState(({ value }) => ({ value: value - 1 }));
      this.sendValue(value - 1);
    }
  };
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    const inputToNumber = Number(input);

    if (inputToNumber) {
      this.setState(({ value }) => ({ value: inputToNumber }));
      this.sendValue(inputToNumber);
    } else {
      this.setState(({ value }) => ({ value: 0 }));
      this.sendValue(0);
    }
  };

  render() {
    const { value } = this.state;

    return (
     
        <div className="">
            <h3 className="Quantity__title">Количество</h3>
          <Button
            size="small"
            color="primary"
            variant="contained"
            type="button"
            onClick={this.decrement}
          >
            -
          </Button>
          <Input
            className="Quantity__input"
            type="text"
            value={value}
            onChange={this.onChange}
          ></Input>
          <Button
            size="small"
            color="primary"
            variant="contained"
            type="button"
            onClick={this.increment}
          >
            +
          </Button>
        </div>
  
    );
  }
}
