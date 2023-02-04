import React from 'react';
import './App.css';
import SingleColumn from './layouts/single-column/Index';
import Home from './pages/home'

function App() {
  const title: string = "Application Name";
  return (
    <div className="App">
      <SingleColumn title={title}>
        <Home/>
      </SingleColumn>
    </div>
  );
}

export default App;
