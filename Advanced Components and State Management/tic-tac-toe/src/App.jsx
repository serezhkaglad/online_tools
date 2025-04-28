import { useState } from 'react';
import Board from './components/Board';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ marginBottom: '40px' }}>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Dynamic Greeting</h2>
        <NameInput onNameChange={setName} />
        <Greeting name={name} />
      </section>

      <section>
        <h2>Weekdays Starting from Today</h2>
        <Weekdays />
      </section>
    </div>
  );
};

export default App;