/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import calculate from '../Logic/Calculate';

export default class calculator extends Component {
  constructor() {
    super();
    this.state = { total: '0', next: null, operation: null };
  }

  changeMessege(name) {
    const result = calculate(this.state, name);
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ ...this.state, ...result });
  }

  render() {
    return (
      <div className="container">
        <div className="output">
          <span>{this.state.next}</span>
          <span>{this.state.operation}</span>
          <span>{this.state.total}</span>
        </div>
        <div className="buttons">
          <div className="btn" onClick={() => this.changeMessege('AC')}>
            AC
          </div>
          <div className="btn" onClick={() => this.changeMessege('+/-')}>
            +/-
          </div>
          <div className="btn" onClick={() => this.changeMessege('%')}>
            %
          </div>
          <div className="btn side" onClick={() => this.changeMessege('÷')}>
            ÷
          </div>
          <div className="btn" onClick={() => this.changeMessege('7')}>
            7
          </div>
          <div className="btn" onClick={() => this.changeMessege('8')}>
            8
          </div>
          <div className="btn" onClick={() => this.changeMessege('9')}>
            9
          </div>
          <div className="btn side " onClick={() => this.changeMessege('x')}>
            x
          </div>
          <div className="btn" onClick={() => this.changeMessege('4')}>
            4
          </div>
          <div className="btn" onClick={() => this.changeMessege('5')}>
            5
          </div>
          <div className="btn" onClick={() => this.changeMessege('6')}>
            6
          </div>
          <div className="btn side" onClick={() => this.changeMessege('-')}>
            -
          </div>
          <div className="btn" onClick={() => this.changeMessege('1')}>
            1
          </div>
          <div className="btn" onClick={() => this.changeMessege('2')}>
            2
          </div>
          <div className="btn" onClick={() => this.changeMessege('3')}>
            3
          </div>
          <div className="btn side" onClick={() => this.changeMessege('+')}>
            +
          </div>
          <div className="btn zero" onClick={() => this.changeMessege('0')}>
            0
          </div>
          <div className="btn" onClick={() => this.changeMessege('.')}>
            .
          </div>
          <div className="btn side" onClick={() => this.changeMessege('=')}>
            =
          </div>
        </div>
      </div>
    );
  }
}
