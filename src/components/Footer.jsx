import { useState, useEffect } from 'react';

function Footer() {
    const [value, setValue] = useState(0);

    let obj = { name: 'John Doe', age: 50 };

    localStorage.setItem('example', JSON.stringify(obj));

    useEffect(() => {
        const data = localStorage.getItem('example');
        console.log('stored data', JSON.parse(data));
    });

    return (
        <footer>
            <p>&copy; Yves Shema, 2025. All rights reserved.</p>

            <button onClick={() => setValue(value + 1)}>Increment</button>

            <Effect value={value} />
        </footer>
    );
}

function Effect({ value }) {

    const [query, setQuery] = useState('');

    const [counter, setCounter] = useState(0);

    function sayHello() {
        console.log('Hello, React!');
    }

    useEffect(() => {
        console.log('Runs on every render');
    });

    useEffect(sayHello, [value]);

    useEffect(() => {
        console.log('Query changed:', query);
    }, [query]);

    useEffect(() => {
        console.log('Runs on mount');
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(value => value + 1);
        }, 1000);
        
        // cleanup function
        return () => clearInterval(interval);
    }, []);

    function handleInput(e) {
        if (e.key === 'Enter') {
            setQuery(e.target.value);
            e.target.value = '';
        }
        
    }

    return (
        <>
            <div>
                <h2>Timer</h2>
                <p>{counter}</p>
            </div>
            <p><input type="text" onKeyDown={handleInput} /></p>
            <p>Value: {value}</p>
            
        </>
    );
}

export default Footer;