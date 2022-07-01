import { useState } from "react";
import Head  from "next/head";

const Counter = () =>{
    const [count,setCount] = useState(0)
    return (
        <>
        <Head>
            <title>Counter Page!</title>
        </Head>
        <h1>{count}</h1>
        <button onClick={() => setCount(prevCount => prevCount+1)}>increment count</button>
        <button onClick={() => setCount(prevCount => prevCount-1)}>decrement count</button>
        </>
    )
}

export default Counter