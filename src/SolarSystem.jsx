import { useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const invalidPlanets = ["pluto", "ceres", "makemake"];

export default function SolarSystem() {
  const [planets, setPlanets] = useState([]);

  const prevStateRef = useRef();

  function handleInput(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      prevStateRef.current = [...planets];

      setPlanets([...planets, e.target.value]);
      e.target.value = '';
    }
  }

  return (
    <div>
      <h2>Planets of the Solar System</h2>
      <input type="text" placeholder="enter a planet..." onKeyDown={handleInput} />

      <ErrorBoundary
        FallbackComponent={PlanetsErrorHandler}
        onReset={() => setPlanets([...prevStateRef.current])} 
      >
        <Planets planets={planets} />
      </ErrorBoundary>
    </div>
  );
}

function PlanetsErrorHandler({ error, resetErrorBoundary }) {
  const styles = {
    border: '1px solid red',
    padding: '1rem',
    color: 'red'
  };

  return (
    <>
      <p style={styles}>{error.message}</p>

      <button onClick={resetErrorBoundary}>Try again!</button>
    </>
  );
}

function Planets({ planets }) {
  return (
    <ul>
      {planets.map((planet, index) => {
        if (invalidPlanets.includes(planet)) {
          throw new Error(`"${planet}" is not a planet!`);
        }
        return <p key={index}>{planet}</p>
      })}
    </ul>
  );
}