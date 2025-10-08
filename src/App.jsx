import { useState } from 'react';

import './App.css';

import TopPlayers from './TopPlayers';

function App() {

  const [show, setShow] = useState(true);

  console.log('Parent re-rendering');

  return (
    <div className="app">
      <h1>React state management examples</h1>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} counter
      </button>
      
      <div className="examples">
        <Greeting />
        {/* { show && <Counter />} */}
        <Counter isVisible={show} />
        <TopPlayers />
      </div>

    </div>
  )
}

function Counter({ isVisible }) {
  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    // if (count > 0) {
    //   setCount(count - 1);
    // }
    if (count < 1) return;
    setCount(count - 1);
    
  }

  console.log('Counter Re-rendering');

  if (!isVisible) return null;

  return (
    <div className="counter">
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function Greeting() {
  let greeting = 'Hello, World!';

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

export default App;
