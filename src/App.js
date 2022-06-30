import React, { Component } from 'react';
import Calculator from './Components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}
