import { CardPost} from "./style"
import like from "../../assets/Like.png"
import dislike from "../../assets/dislike.png"
import comentario from "../../assets/comentario.png"
import { useContext,useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import axios from "axios"
export const Card = (props) => {
    const { postagem } = props;

  
   
    





    
    return(
        <CardPost> 
            <div>
           <h2>Enviado por:{props.postagem.creator.nickname} </h2>
           <p>{props.postagem.content} </p>
           
           <div>
            <span className="likeedislike">
                <img src={like}  alt= "like"/>
                1.2K
                <img src={dislike} alt= "dislike"/>
            </span>
              
            <span className="comentario">
                <img src={comentario} alt= "comentario"/>
                54

            </span>
            </div>
            </div>
        </CardPost>

)
}; export default Card