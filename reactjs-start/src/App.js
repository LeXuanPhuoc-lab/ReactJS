import { useState } from 'react';
import Square from './Square';
import Input from './Input';

function App() {

  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="d-flex flex-column align-items-center">
      <Square 
        colorValue={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      /> 
    </div>
  );
}

export default App;
