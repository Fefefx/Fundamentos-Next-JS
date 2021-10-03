import CustomTitle from "../../components/title"

export default function usingTitle(){
    return (
        <div>
            <CustomTitle 
                main="Página de cadastro"
                secondary="Incluir, alterar e excluir coisas !"
            />
            <CustomTitle 
                main="Página de login"
                secondary="Informe o seu e-mail e senha"
                small={true}
            />
            <CustomTitle 
                main="Página de login"
                secondary="Informe o seu e-mail e senha"
                small
            />
        </div>
    )
}