import { Component } from "react";

export default class Count extends Component{

    
    constructor(props){
        super(props);

        this.state = {
            // ?? Define um valor padrão para caso o valor não seja informado
            number : props.initialValue ?? 0,
            step: props.step ?? 1
        }
    }

    // constructor(props){
    //     super(props);

    //     this.inc = this.inc.bind(this);
    // }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        });
    }

    changeStep = (ev) =>{
        this.setState({ step : +ev.target.value})
    }

    renderForm(){
        return (
            <>
                <input type="number" min={1} max={100} value={this.state.step} onChange={this.changeStep}/>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </>
        )
    }
    
    render(){
        return (
            <div>
                <h1>Contador (usando classe)</h1>
                <h3>{this.state.number}</h3>
                {this.renderForm()}               
            </div>
        );
    }
}

// export default Count