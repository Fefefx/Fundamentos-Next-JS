export default function Style (props){
    return (
        <div>
            <h1 style={
                {backgroundColor: props.number >= 0 ? '#2D2' : "#D22",
                color: props.color, textAlign: props.right ? "right" : "left"}}>
                Texto #01
            </h1>
            <h2 className={props.number >= 0 ? 'blue' : 'red'}>
                Texto #02
            </h2>
        </div>
    )
}