import { useState } from "react";
import NumberDisplay from "../../components/NumberDisplay";


export default function Count(){
    const [count, setCount] = useState(0);

    const decrement = () => setCount(count - 1);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>Contador</h1>
            <NumberDisplay number={count}></NumberDisplay>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
}