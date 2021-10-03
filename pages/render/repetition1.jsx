export default function repetition1(){
    const approvedList = [
        'João', 'Maria', 'Ana', 'Bia', 'Carlos', 'Daniel', 'Laura'
    ];

    function renderList() {
        return approvedList.map((name, i) => <li key={i}> {name} </li>);
    }
    
    return (
        <ul>
            {renderList()}
        </ul>
    );
}

// function renderList() {

//     const items = [];
//     for(let i=0; i < approvedList.length; i++){
//         items.push(<li key={i}>{approvedList[i]}</li>);
//     }

//     return items;
// }