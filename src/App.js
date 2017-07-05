import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <Form />
      </div>
    );
  }
}

export default App;
