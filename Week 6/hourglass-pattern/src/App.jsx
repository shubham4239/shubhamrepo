import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [pattern, setPattern] = useState('');

  const generateHourglass = (n) => {
    let result = '';
    for (let i = n; i >= 1; i -= 2) {
      let spaces = ' '.repeat((n - i) / 2);
      let stars = '*'.repeat(i);
      result += spaces + stars + '\n';
    }
    for (let i = 3; i <= n; i += 2) {
      let spaces = ' '.repeat((n - i) / 2);
      let stars = '*'.repeat(i);
      result += spaces + stars + '\n';
    }

    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number);
    if (isNaN(num) || num % 2 === 0 || num < 1) {
      setPattern('Please enter a valid odd number greater than 0.');
    } else {
      setPattern(generateHourglass(num));
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Hourglass Star Pattern</h2>
        <form onSubmit={handleSubmit}>
          <label>Enter an odd number:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <pre className="pattern-box">{pattern}</pre>
      </div>
    </div>
  );
}

export default App;
