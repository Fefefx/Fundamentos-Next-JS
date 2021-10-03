export default function NumberDisplay(props){
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#222",
            color: "#fff",
            font: "2rem",
            margin: "20px",
        }}>
            {props.number}
        </div>
    )
}