import React, { Component } from 'react';
import calculate from '../Logic/Calculate';
import { useState } from 'react';
const Calculator = () => {
  const value = { total: '0', next: null, operation: null };
  const [items, changeItems] = useState(value);
  const changeMessege = (name) => {
    const result = calculate(items, name);
    changeItems({ ...items, ...result });
  };
  return (
    <div className='container'>
      <div className='output'>
        <span>{items.next}</span>
        <span>{items.operation}</span>
        <span>{items.total}</span>
      </div>
      <div className='buttons'>
        <div className='btn' onClick={() => changeMessege('AC')}>
          AC
        </div>
        <div className='btn' onClick={() => changeMessege('+/-')}>
          +/-
        </div>
        <div className='btn' onClick={() => changeMessege('%')}>
          %
        </div>
        <div className='btn side' onClick={() => changeMessege('÷')}>
          ÷
        </div>
        <div className='btn' onClick={() => changeMessege('7')}>
          7
        </div>
        <div className='btn' onClick={() => changeMessege('8')}>
          8
        </div>
        <div className='btn' onClick={() => changeMessege('9')}>
          9
        </div>
        <div className='btn side ' onClick={() => changeMessege('x')}>
          x
        </div>
        <div className='btn' onClick={() => changeMessege('4')}>
          4
        </div>
        <div className='btn' onClick={() => changeMessege('5')}>
          5
        </div>
        <div className='btn' onClick={() => changeMessege('6')}>
          6
        </div>
        <div className='btn side' onClick={() => changeMessege('-')}>
          -
        </div>
        <div className='btn' onClick={() => changeMessege('1')}>
          1
        </div>
        <div className='btn' onClick={() => changeMessege('2')}>
          2
        </div>
        <div className='btn' onClick={() => changeMessege('3')}>
          3
        </div>
        <div className='btn side' onClick={() => changeMessege('+')}>
          +
        </div>
        <div className='btn zero' onClick={() => changeMessege('0')}>
          0
        </div>
        <div className='btn' onClick={() => changeMessege('.')}>
          .
        </div>
        <div className='btn side' onClick={() => changeMessege('=')}>
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
