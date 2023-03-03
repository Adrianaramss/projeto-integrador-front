import {TextoSignup} from "../signup/style"
// import logoheader from "../../assets/logo-signup.png"
import { Input,Button,Texto } from "../signup/style"
import { Header } from "../../Components/header"
export const SignupPage = () => {
    return(
        <>
    <Header/> 

     <TextoSignup>  
    Olá, boas vindas ao LabEddit ;)
    </TextoSignup> 

        <Input placeholder="Apelido"/>
        <Input  placeholder="E-mail"/>
        <Input  placeholder="Senha"/>
    <Texto>
        <div>
      <p>Ao continuar, você concorda com o nosso
      <span className="textocolorido">  Contrato de usuário </span> e nossa <span className="textocolorido"> Política de Privacidade </span> <br/> </p>
         <br/>
         <p> <input type="checkbox"></input> Eu concordo em receber emails sobre coisas legais <br/> no LabEddit  </p>
     </div>
    </Texto>

        <Button>Cadastrar</Button>

    </>
    )
}