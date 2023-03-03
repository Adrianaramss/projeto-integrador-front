import {TextoSignup} from "../signup/style"
import logoheader from "../../assets/logo-signup.png"
import { Header,Input,Button,Texto } from "../signup/style"

export const SignupPage = () => {
    return(
        <>
        <Header> 
        <div>
            <img src={logoheader}></img>
            <h2>Entrar</h2>
        </div>
        </Header>
     <TextoSignup>  
    Olá, boas vindas ao LabEddit ;)
    </TextoSignup> 

        <Input placeholder="Apelido"/>
        <Input  placeholder="E-mail"/>
        <Input  placeholder="Senha"/>
    <Texto>
        <div>
      <p>Ao continuar, você concorda com o nosso
         Contrato de usuário e nossa Política de Privacidade <br/> </p>
         <br/>
         <p> <input type="checkbox"></input> Eu concordo em receber emails sobre coisas legais <br/> no LabEddit  </p>
     </div>
    </Texto>

        <Button>Cadastrar</Button>

    </>
    )
}