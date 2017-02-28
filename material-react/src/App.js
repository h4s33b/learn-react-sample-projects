import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'material-ui/DatePicker';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      controlledDate: new Date(),
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
    console.log(date);
  };

  render() {
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
        />
    );
  }
}

export default App;
