interface PeopleProps{
    name: string;
    age?: number;
}

export default function People(props: PeopleProps){
    return (
        <div>
            <div>Nome: {props.name}</div>
            <div>Idade: {props.age ?? 'Não informada'}</div>
        </div>
    )
}