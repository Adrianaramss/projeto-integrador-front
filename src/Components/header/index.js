import { HeaderStyled } from "./style"
import logoheader from "../../assets/logo-signup.png"
import { goToLoginPage } from "../../routes/coordinator";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {


    const location = useLocation();

    const navigate = useNavigate();


    
    return(
       
        <HeaderStyled> 
         <img src={logoheader}></img>   
        <div>
            {location.pathname === "/signup"?
           
            <h2 onClick={()=>goToLoginPage(navigate)}  style={{ cursor: "pointer" }} >Entrar</h2>
            :
            <h2 onClick={()=>goToLoginPage(navigate)} style={{ cursor: "pointer" }} >Logout</h2>

             }
                 
        </div>
        </HeaderStyled>

)
}; export default Header