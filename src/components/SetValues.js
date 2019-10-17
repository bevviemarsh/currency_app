import React, { Component } from "react";
import "../styles/SetValues.css";

class SetValues extends Component {
  state = {
    name: "",
    amountOfEuro: "",
    zloty: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      !this.state.name ||
      !this.state.amountOfEuro ||
      !Number(this.state.amountOfEuro)
    ) {
      this.setState({
        amountOfEuro: ""
      });
      return;
    }

    this.props.add(this.state);

    this.setState({
      name: "",
      amountOfEuro: "",
      zloty: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form
          id="transaction"
          className="setValuesForm"
          onSubmit={this.handleSubmit}
        >
          <div className="contName">
            <span>Name of transaction: </span>
            <input
              id="name"
              className="input nameOfTransaction"
              type="text"
              placeholder="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="contEuro">
            <span>Amount of euro:</span>
            <input
              id="amountOfEuro"
              className="input cash"
              type="text"
              placeholder="number"
              value={this.state.amountOfEuro}
              onChange={this.handleChange}
            />
            <span>EURO</span>
          </div>
          <button className="setButton">Add</button>
        </form>
      </div>
    );
  }
}

export default SetValues;
