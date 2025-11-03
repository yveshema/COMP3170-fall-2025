import { ErrorBoundary } from 'react-error-boundary';
import SolarSystem from './SolarSystem';
import Posts from './Posts';

function App() {
  return (
    <>
      <div className="app">
        <h1>Error Handling and data fetching in React</h1>

        <SolarSystem />

        <Posts />

        {/* <ErrorBoundary fallback={<p>Something went wrong!</p>}>
          <Greeting />
        </ErrorBoundary> */}
      </div>
    </>
  );
}

function Greeting({ greeting }) {
  let upperCaseGreeting;

  try {
    upperCaseGreeting = greeting.toUpperCase();
  } catch (e) {
    upperCaseGreeting = e.message;
  }

  return (
    <p>{upperCaseGreeting} {x}</p>
  );
}

export default App;
