import { useState } from "react";

export default function Mouse(){
    const [x, setX] = useState(0);    

    const [y, setY] = useState(0);

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    };

    function whenMove(ev){
        setX(ev.clientX);
        setY(ev.clientY);
    }

    return (
        <div style={ style } onMouseMove={whenMove}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    );
}