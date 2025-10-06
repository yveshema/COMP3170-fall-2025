import { useState } from 'react';

import './App.css';

import TopPlayers from './TopPlayers';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <h1>React state management examples</h1>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} counter
      </button>

      <div className="examples">
        <Greeting />
        {/* {show && <Counter />} */}
        <Counter visible={show} />

        <TopPlayers />
      </div>

    </div>
  );
}

function Greeting() {
  let greeting = "Hello, World!";

  function handleClick() {
    greeting = 'Hello, React';
    console.log(greeting);
  }

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={handleClick}>Change greeting</button>
    </div>
  );
}

function Counter({ visible }) {
  // const state = useState(0);

  // const count = state[0];
  // const setCount = state[1];
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  }

  console.log('Component re-rendered');

  if (!visible) return null;

  return (
    <div className="counter">
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
