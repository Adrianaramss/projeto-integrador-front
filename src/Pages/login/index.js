import { Navigate } from "react-router-dom"
import logo from "../../assets/logolabenu.png"
import { goToSignupPage } from "../../routes/coordinator"
import {Container} from "./style"
import {Input,Button, ButtonConta, Div} from "./style"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate()


    return(
        <>
        
    <Container>
    <div>
        <img src={logo}></img>
        <p>O projeto de rede social da Labenu</p>  
    </div>
    </Container>
      
        <Input placeholder="E-mail"/>
        <Input  placeholder="Senha"/>

       <Button>Continuar</Button>
       
       <Div></Div>
       
       <ButtonConta onClick={()=> goToSignupPage(navigate)  }>Crie uma conta!</ButtonConta>
    </>
    )
}