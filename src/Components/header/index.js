import { HeaderStyled } from "./style"
import logoheader from "../../assets/logo-signup.png"

export const Header = () => {

    


    
    return(
        <HeaderStyled> 
        <div>
            <img src={logoheader}></img>
            
            <h2>Entrar</h2>
        </div>
        </HeaderStyled>

)
}; export default Header