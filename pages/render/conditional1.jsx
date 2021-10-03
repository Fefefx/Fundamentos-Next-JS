import OnlyPair from "../../components/OnlyPair";

export default function conditional1(){

    function renderNumbers(){
        let items = [];
        for(let i=1; i<=10; i++){
            items.push(<OnlyPair key={i} number={i} />);
        }
        return items;
    }

    return (
        <span>
            {renderNumbers()}
        </span>
    );
}