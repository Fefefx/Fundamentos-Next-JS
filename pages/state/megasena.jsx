import { useEffect, useState } from 'react';
import NumberDisplay from '../../components/NumberDisplay';
import { mega } from '../../functions/mega';

export default function Megasena(){

    const [qtde, setQtde] = useState(6);
    const [numbers, setNumbers] = useState([]);

    useEffect(()=>{
        setNumbers(mega())
    }, []);                 

    function renderNumbers(){
        return numbers.map(n => <NumberDisplay key={n} number={n}></NumberDisplay> )
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <h1>Mega sena!</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                {renderNumbers()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)}/>
                <button onClick={()=> setNumbers(mega(qtde))}>Gerar aposta</button>
            </div>
        </div>
    )
}