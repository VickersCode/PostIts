import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>  
      <div className="App">
        <Square />
        <Square />
      </div>
      <div className='App'>
        <Square />
        <Square />
      </div>
    </div>
  );
}

const Square = () => {
  const squareStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    margin: '10px'
  };

  return <div style={squareStyle}></div>;
}

export default App;
