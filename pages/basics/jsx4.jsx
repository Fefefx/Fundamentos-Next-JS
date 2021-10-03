export default function jsx4(){
    const subtitle = "Estou no Javascript";
    const h3 =  <h3>{3 * 3}</h3>;
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitle}</h2>
            {h3}
            <h4>{Math.max(13, 39)}</h4>
            <h5>{between(9.6, 1, 10)}</h5>
        </div>
    );
}

function between(value, min, max){
    if(value >= min && value <= max){
        return "Sim";
    } else {
        return "Não";
    }
}