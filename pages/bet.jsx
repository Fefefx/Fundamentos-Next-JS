import { useState } from "react";
import NumberDisplay from "../components/NumberDisplay";

export default function bet(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [quantity, setQuantity] = useState(6);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sequence, setSequence] = useState([]);

    function generateBet(){
        const data = [];
        for(let i = 0; i < quantity; i++){
            const value = generateRandomSequence(1,60);
            const check = data.findIndex(number => number === value);
            if(check === -1){
                data.push(value);
            } else {
                i--;
            }
        }
        setSequence(data);
    }

    function generateRandomSequence(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function renderCountDisplay(){
        if(!sequence.length){
            generateBet();
        }
        return sequence.map(number => <NumberDisplay key={number} number={number}></NumberDisplay>)
    }

    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {renderCountDisplay()}
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                <input type="number" value={quantity} onChange={e=> setQuantity(e.target.value)}></input>
                <button onClick={generateBet}>Gerar aposta</button>
            </div>
        </>
    );
}