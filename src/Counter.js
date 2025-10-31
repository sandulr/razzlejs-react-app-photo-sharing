import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export const Counter = () => {
    
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return <>
        <Helmet>
            <title>Counter</title>
            <meta name='description' content='Web counter' />
          </Helmet>
        <p>{count}</p>
        <br />
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <hr />
        <Link to="/">Home</Link>
    </>;
};