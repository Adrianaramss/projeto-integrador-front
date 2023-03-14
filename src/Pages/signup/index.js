import {TextoSignup} from "../signup/style"
// import logoheader from "../../assets/logo-signup.png"
import { Input,Button,Texto } from "../signup/style"
import { Header } from "../../Components/header"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { goToFeedPage } from "../../routes/coordinator"


export const SignupPage = () => {

    const navigate = useNavigate();

  
    const [form, setForm] = useState({
      apelido: "",
      email: "",
      password: "",
    });


    const changeForm = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
  
    const signup = async () => {
    
      try {
        const body = {
          nickname: form.apelido,
          email:form.email,
          password: form.password
        };
  
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/signup`,body);
        window.localStorage.setItem(`teste`, response.data.token);
  
        if(response.data.token !== undefined){
          goToFeedPage(navigate)
      } 

  } catch (error) {
      console.log(error)
  }
}
  

    return(
        <>
    <Header/> 

     <TextoSignup>  
    Olá, boas vindas ao LabEddit ;)
    </TextoSignup> 

        <Input name={"apelido"} onChange={changeForm} value={form.apelido}  placeholder="Apelido" />
        <Input name={"email"} onChange={changeForm} value={form.email}  placeholder="E-mail"/>
        <Input name={"password"}onChange={changeForm} value={form.password}   type={"password"} placeholder="Senha"/>

    <Texto>
        <div>
      <p>Ao continuar, você concorda com o nosso
      <span className="textocolorido">  Contrato de usuário </span> e nossa <span className="textocolorido"> Política de Privacidade </span> <br/> </p>
         <br/>
         <p> <input type="checkbox"></input> Eu concordo em receber emails sobre coisas legais <br/> no LabEddit  </p>
     </div>
    </Texto>

        <Button onClick={()=>signup()} >Cadastrar</Button>

    </>
    )
}