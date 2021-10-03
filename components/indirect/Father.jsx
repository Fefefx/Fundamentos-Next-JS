import Son from "./Son";

export default function Father(props){

    function talkWithMe(param1, param2, param3){
        console.log(param1, param2, param3);
    }

    return (
        <div>
            <Son function={talkWithMe}></Son>
        </div>
    );
}