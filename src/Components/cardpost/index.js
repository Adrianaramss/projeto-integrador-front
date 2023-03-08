import { CardPost} from "./style"
import like from "../../assets/Like.png"
import dislike from "../../assets/dislike.png"
import comentario from "../../assets/comentario.png"

export const Card = () => {

    
    return(
        <CardPost> 
            <div>
          
           <h2>Enviado por: labaluno83</h2>
           <p>Por que a maioria dos desenvolvedores 
            usam Linux? ou as empresas de tecnologia usam Linux?  </p>
           
           <div>
            <span className="likeedislike">
                <img src={like} alt= "like"/>
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