export default function CustomTitle(props){
    
        return props.small ? (
            <>
                <p>{props.main}</p>
                <p>{props.secondary}</p>
            </>
        ) : (
            <>
                <h1>{props.main}</h1>
                <h2>{props.secondary}</h2>
            </>
        )
}