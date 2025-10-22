import { useEffect, useState } from 'react';

function Footer() {
    const [value, setValue] = useState(0);

    const obj = {
        name: 'John Smith',
        age: 50
    };

    localStorage.setItem('example', JSON.stringify(obj));

    // useEffect(() => {
    //     const storedValue = localStorage.getItem('example');

    //     console.log('Stored value is:', JSON.parse(storedValue));
    // });

    return (
        <footer>
            <p>&copy; Yves Shema, 2025. All rights reserved.</p>

            <button onClick={() => setValue(v => v + 1)}>Increment</button>

            {/* <Effect value={value} /> */}
        </footer>
    );
}

function Effect({ value }) {
    const [query, setQuery] = useState('');
    const [counter, setCounter] = useState(0);

    function greeting() {
        console.log('Hello, React!');
    }

    useEffect(greeting);

    useEffect(() => {
        console.log('Runs only once at mount');
    }, []);

    useEffect(() => {
        console.log('Current query value:', query);
    }, [query]);

    useEffect(() => {
        const interval = setInterval(() => { 
            setCounter(v => v + 1);
        }, 1000);

        return () => clearInterval(interval); // clean-up function
    }, []);


    function handleInput(e) {
        if (e.key === 'Enter') {
            setQuery(e.target.value);
            e.target.value = '';
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p>Value: {value}</p>
            <p>
                <input type="text" placeholder="search..." onKeyDown={handleInput} />
            </p>

            <div>
                <h3>Counter</h3>
                <p>{counter}</p>
            </div>
        </div>
    );
}

export default Footer;