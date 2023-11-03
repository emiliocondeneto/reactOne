import { useState } from "react";

function Contador() {

    // let count = 0;
    const [count, setCount] = useState(0);

    function counter(value) {
        setCount(count + value)
        // count += value;
        // let countElemt = document.querySelector("h2");
        // countElemt.innerText = count;
    }

    return (
        <div>
            <h1>Contator</h1>
            <h2>{count}</h2>
            <p>{count}</p>
            <div>{count}</div>

            <button onClick={() => counter(+1)}>+1</button>

            <button onClick={() => counter(-1)}>-1</button>
        </div>
    )
}

export default Contador;