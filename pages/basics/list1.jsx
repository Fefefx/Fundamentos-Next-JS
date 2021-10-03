export default function list1(){
    return (
        <div>
            { generateSpan(10)}
        </div>
    );
}

function generateSpan(value){
    const array = [];
    for(let i=1; i<=value; i++) {
        array.push(<span>{i},</span>);
    }
    return array;
}