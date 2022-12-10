import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(prevState => prevState + 1)
    const clear = () => setCount(0)

    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{height: 50}}>Counter</h1>
            <span>{count}</span>
            <button style={{width: 100, marginTop: 20}} onClick={increment}>increment</button>
            <button style={{width: 100, margin: 20}} onClick={clear}>clear</button>
            <Link to={`/second`}>Go to Second Page</Link>
        </div>
    );
}

export default Counter;
