import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Search from './Search';
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Form />
      </div>
    );
  }
}

export default App;
