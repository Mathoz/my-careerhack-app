import React, { Component } from "react";
import "../Styles/Temperature.css";

export class Temperature extends Component {
  state = {
    temperature: null,
  };

  handleTemperature = (evt) => {
      this.setState({temperature: evt.target.value})
  }

  render() {
    const {temperature} = this.state;
    return (
      <div id="temperature">
        <h1>Temperature</h1>
        <input
          id="celsus"
          type="number"
          name="celsus"
          value={temperature}
          placeholder="Temperature in °C"
          onChange={this.handleTemperature}
        />
        {this.state.temperature < 10 && <p id="cold">It's cold</p>}
        {this.state.temperature >= 10 && this.state.temperature < 30 && <p id="nice">It's nice</p>}
        {this.state.temperature >= 30 && <p id="warm">It's warm</p>}
      </div>
    );
  }
}

export default Temperature;
