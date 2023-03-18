import { CardPost} from "./style"
import dislike from "../../assets/dislike.png"
import like1 from "../../assets/Like.png"
import comentario from "../../assets/comentario.png"
import { useContext,useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import axios from "axios"
import { goToPostComments } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"

export const Card = (props) => {
  const navigate = useNavigate();

    const { postagem } = props;
    const context = useContext(GlobalContext);
    const { fetchPostagem } = context;
  
    const [isLoading, setIsLoading] = useState(false)
  
    const like = async () => {
      setIsLoading(true)
  
      try {
        const token = window.localStorage.getItem("labeedi-token");
  
        const config = {
          headers: {
            Authorization: token
          }
        };
  
        const body = {
          like: true
        }
  
       await axios.put(BASE_URL + `/posts/${postagem.id}/like`,body,config);

        setIsLoading(false)
        fetchPostagem()
      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      }
    };
  
  

    return(
        <CardPost> 
            <div>
           <h2>Enviado por:{props.postagem.creator.nickname} </h2>
           <p>{props.postagem.content} </p>
           
           <div>
            <span className="likeedislike" >
                <img  src={like1}  onClick={()=>like(postagem.id)} style={{ cursor: "pointer" }}   alt= "like"/>
                {" "}   {postagem.likes}
                <img src={dislike} alt= "dislike"/>
            </span>
              
            <span className="comentario">
                <img src={comentario} onClick={()=> goToPostComments(navigate)}  alt= "comentario"/>
                54

            </span>
            </div>
            </div>
        </CardPost>

)
}; export default Card