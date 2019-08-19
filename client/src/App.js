import React from 'react';
import logo from './logo.svg';
import './App.css';

import TestOne from './Components/TestOne';
import TestTwo from './Components/TestTwo';
import TestThree from './Components/TestThree';

function App() {
  return (
    <div className="App">
    testing app 
    <TestOne/>
    <TestTwo/>
    <TestThree/>
    </div>
  );
}

export default App;
