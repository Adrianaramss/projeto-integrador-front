import { Navigate } from "react-router-dom"
import logo from "../../assets/logolabenu.png"
import { goToFeedPage, goToLoginPage, goToSignupPage } from "../../routes/coordinator"
import {Container} from "./style"
import {Input,Button, ButtonConta, Div} from "./style"
import { useNavigate } from "react-router-dom"
import { BASE_URL,TOKEN_NAME } from "../../constants/BASE_URL"
import axios from "axios"
import { useState } from "react"


export const LoginPage = () => {

    const navigate = useNavigate();


    const [form, setForm] = useState({
      email: "",
      password: ""
    });
  
  
    const changeForm = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
  
    const login = async () => {
    
      try {
        const body = {
          email: form.email,
          password: form.password
        };
  
        const response = await axios.post(`${BASE_URL}/users/login`,body);
        window.localStorage.setItem("labeedi-token", response.data.token);
  
        if(response.data.token !== undefined){
          goToFeedPage(navigate)
      } 
      // alert("Verifique se você tem cadastro ")

  } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)

  }
}


    return(
        <>
        
    <Container>
    <div>
        <img src={logo}></img>
        <p>O projeto de rede social da Labenu</p>  
    </div>
    </Container>

        <Input name="email"  value={form.email} onChange={changeForm} />
        <Input name="password" value={form.password} onChange={changeForm} type={"password"}
  />

       <Button onClick={()=>login()}>Continuar</Button>

       <Div></Div>
       
       <ButtonConta onClick={()=> goToSignupPage(navigate)}>Crie uma conta!</ButtonConta>

    </>
    )
}