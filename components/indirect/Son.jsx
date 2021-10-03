export default function Son(props){
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.function}>Falar com o pai #01</button>
            <button onClick={
                () => props.function("Passei no ENEM!", 'Uhuu', 10)
            }>
                Falar com o pai #02
            </button>
        </div>
    );
}