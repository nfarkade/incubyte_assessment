import React from 'react';
import logo from './logo.svg';
import './App.css';
import { add } from './calculator';

function App() {
  // Null string
  //let inputParameter = '';

  // Pure string with single numbers
  //let inputParameter = '1';

  // Pure string with two numbers
  //let inputParameter = '1,2';

  // Pure string with comma separeted numbers
  //let inputParameter = '1,2,3,4,5,6';

  // Pure string with new line characters
  //let inputParameter = '1,\n2,3';

  // Pure string with delimiters
  //let inputParameter = '//;\n1;2';

  // Pure string with negative numbers
  let inputParameter = '1,-2,-3';
  return (
    <div className="App">
      {add(inputParameter)}
    </div>
  );
}

export default App;
