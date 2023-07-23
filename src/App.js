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

  const randomStyle = {

    backgroundColor: color,

  };

    return <div className='squareStyle' style={randomStyle} onClick={changeColor}></div>;
}

const SpinningSquare = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(!isSpinning);
  };



  return <div className={`squareStyle ${isSpinning ? 'spin' : ''}`} 
              onClick={handleClick}></div>;
}

const Square = () => {
  return <div className="squareStyle"></div>;
}

export default App;
