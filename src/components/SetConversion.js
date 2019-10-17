import React, { Component } from "react";
import "../styles/SetConversion.css";

class SetConversion extends Component {
  state = {
    conversion: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!Number(this.state.conversion)) {
      this.setState({
        conversion: ""
      });
      return;
    }

    this.props.add(this.state.conversion);

    this.setState({
      conversion: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <form
        id="conversion"
        className="setConversionForm"
        onSubmit={this.handleSubmit}
      >
        <div className="contPln">
          <span>1 EURO =</span>
          <input
            id="conversion"
            className="input cash"
            type="text"
            placeholder="number"
            value={this.state.conversion}
            onChange={this.handleChange}
          />
          <span>PLN</span>
        </div>
        <button className="setButton">Set</button>
      </form>
    );
  }
}

export default SetConversion;
