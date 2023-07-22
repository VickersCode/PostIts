import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div>  
      <div className="App">
        <ColorfulSquare />
        <SpinningSquare />
      </div>
      <div className='App'>
        <Square />
        <Square />
      </div>
    </div>
  );
}

const ColorfulSquare = () => {
  const [color, setColor] = useState('yellow');

  const changeColor = () => {
    setColor(generateRandomColor());
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }

  const squareStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    backgroundColor: color,
    height: '100px',
    margin: '10px'
  };

    return <div style={squareStyle} onClick={changeColor}></div>;
}

const SpinningSquare = () => {
  return <div className="squareStyle"></div>;
}

const Square = () => {
  return <div className="squareStyle"></div>;
}

export default App;
