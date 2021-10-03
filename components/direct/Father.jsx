import Son from './Son';

export default function Father(props){
    return (
        <div>
            <h1>Família {props.family}</h1>
            <Son name="Pedro" family={props.family}/>    
            <Son name="Joana" family={props.family}/>    
            <Son {...props} name="Gabriel"/>    
        </div>
    );
}