import { useState } from 'react';

export default function form() {

    /* Caso o useState seja inicializado com undefined
       torna o componente não controlado. */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("inicial");

    function alterInput(){
        setValue(value + "!");
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span>{value}</span>
            <input type="text" value={value} onChange={ e => setValue(e.target.value)}></input>
            <button onClick={alterInput}>Alterar</button>
        </div>
    );
}