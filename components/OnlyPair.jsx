export default function OnlyPair(props) {
    // if(props.number % 2 === 0){
    //     return <h1>{props.number}</h1>
    // } else {
    //     return null;
    // }
    const pairNumber = props.number % 2 === 0;
    return (
        <div>
            {pairNumber ?
             <h1>{props.number}</h1> :
              null}
        </div>
    );

}