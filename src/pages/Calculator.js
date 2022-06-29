import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [digitObj, setDigitObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculator = (obj, button) => {
    const newObj = calculate(obj, button);
    setDigitObj(newObj);
  };

  const returnResults = () => {
    const { total, next, operation } = digitObj;

    if (total === null && next === null) {
      return 0;
    } if (next !== null && total === null) {
      return next;
    } if (total !== null && next !== null) {
      if (operation !== null && operation !== undefined) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  };

  return (
    <section className="calculator">
      <h1>Lets do some Math!</h1>
      <div className="container">
        <div className="returnSection">
          {(returnResults())}
        </div>
        <div className="digits">
          <button type="button" className="digits-elts" value="AC" onClick={() => { calculator(digitObj, 'AC'); }}>AC</button>
          <button type="button" className="digits-elts" value="+/-" onClick={() => { calculator(digitObj, '+/-'); }}>+/-</button>
          <button type="button" className="digits-elts" value="%" onClick={() => { calculator(digitObj, '%'); }}>%</button>
          <button type="button" className="digits-elts operator" value="÷" onClick={() => { calculator(digitObj, '÷'); }}>÷</button>
          <button type="button" className="digits-elts" value="7" onClick={() => { calculator(digitObj, '7'); }}>7</button>
          <button type="button" className="digits-elts" value="8" onClick={() => { calculator(digitObj, '8'); }}>8</button>
          <button type="button" className="digits-elts" value="9" onClick={() => { calculator(digitObj, '9'); }}>9</button>
          <button type="button" className="digits-elts operator" value="x" onClick={() => { calculator(digitObj, 'x'); }}>x</button>
          <button type="button" className="digits-elts" value="4" onClick={() => { calculator(digitObj, '4'); }}>4</button>
          <button type="button" className="digits-elts" value="5" onClick={() => { calculator(digitObj, '5'); }}>5</button>
          <button type="button" className="digits-elts" value="6" onClick={() => { calculator(digitObj, '6'); }}>6</button>
          <button type="button" className="digits-elts operator" value="-" onClick={() => { calculator(digitObj, '-'); }}>-</button>
          <button type="button" className="digits-elts" value="1" onClick={() => { calculator(digitObj, '1'); }}>1</button>
          <button type="button" className="digits-elts" value="2" onClick={() => { calculator(digitObj, '2'); }}>2</button>
          <button type="button" className="digits-elts" value="3" onClick={() => { calculator(digitObj, '3'); }}>3</button>
          <button type="button" className="digits-elts operator" value="+" onClick={() => { calculator(digitObj, '+'); }}>+</button>
        </div>
        <span className="end">
          <button type="button" className="digits-elts" value="0" onClick={() => { calculator(digitObj, '0'); }}>0</button>
          <button type="button" className="digits-elts " value="." onClick={() => { calculator(digitObj, '.'); }}>.</button>
          <button type="button" className="digits-elts operator" value="=" onClick={() => { calculator(digitObj, '='); }}>=</button>
        </span>
      </div>
    </section>
  );
};

export default Calculator;
