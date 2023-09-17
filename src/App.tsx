import React from 'react';
import { useState } from './customhooks/useState';

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log('렌더링');

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>toggle: {toggle.toString()}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default App;
