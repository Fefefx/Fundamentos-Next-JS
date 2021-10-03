import Style from "../../components/Style";

export default function usingStyle(){
    return (
        <div>
            <Style number={3} color="#000"></Style>
            <Style number={-13} color="#FFF" right></Style>
        </div>
    )
}