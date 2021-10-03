function action1(){
    console.log('Ação 01');
}

export default function button(){
    
    function action2(){
        console.log('Ação 02');
    }

    function action5(e) {
        console.log(e);
    }
    
    return (
        <div>
            <button onClick={action1}>Click #01</button>
            <button onClick={action2}>Click #02</button>
            <button onClick={function(){
                console.log('Ação 03');
            }}>Click #03</button>
            <button onClick={ () => console.log("Ação 04")}>Click #04</button>
            <button onClick={action5}>Click #05</button>
            <button onClick={e => action5(e.altKey)}>Click #05 v2</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}></input>
            </div>
        </div>
    );
}