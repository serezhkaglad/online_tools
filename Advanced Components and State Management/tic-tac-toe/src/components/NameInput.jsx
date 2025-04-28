import { useState } from 'react';

const NameInput = ({ onNameChange }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    onNameChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter your name"
      value={input}
      onChange={handleChange}
    />
  );
};

export default NameInput;