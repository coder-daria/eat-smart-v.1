import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import AddNewProductContainer from "./AddNewProductContainer";

class App extends Component {
  
  render() {
    return (
      <div>
        <SearchContainer />
        <AddNewProductContainer/>
      </div>
    );
  }
}

export default App;
