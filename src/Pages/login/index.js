import logo from "../../assets/logolabenu.png"
import {Container} from "./style"
import {Input,Button, ButtonConta, Div} from "./style"


export const LoginPage = () => {
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
       
       <ButtonConta>Crie uma conta!</ButtonConta>
    </>
    )
}