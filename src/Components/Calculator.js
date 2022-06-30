import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="output">0</div>
        <div className="buttons">
          <div className="btn">AC</div>
          <div className="btn">+/-</div>
          <div className="btn">%</div>
          <div className="btn side">/</div>
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
          <div className="btn side">*</div>
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
          <div className="btn side">-</div>
          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
          <div className="btn side">+</div>
          <div className="btn zero">0</div>
          <div className="btn">.</div>
          <div className="btn side">=</div>
        </div>
      </div>
    );
  }
}
