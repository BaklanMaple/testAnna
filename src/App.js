import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

function App() {
 
  return (
    <div className="App">
      {/* <ChildOne /> */}
      <ChildTwo />
    </div>
  );
}

  export default App;
