import { useNavigate } from "react-router-dom";
import Header from "../../Components/header";
import fechar from "../../assets/fechar.png"
import {FecharPOST} from "./styled"
import { goToFeedPage } from "../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


export const Comments = () =>{
    const navigate = useNavigate();

    const context = useContext(GlobalContext)
    const { postagem, fetchPostagem } = context;

    return(
        <>
        <Header/>
        <FecharPOST>
        <div>
        <img src={fechar} onClick={()=>goToFeedPage(navigate)} ></img>
        </div>
        </FecharPOST>
       <br/> Página em Desenvolvimento
     
        
        </>
    )
}; 