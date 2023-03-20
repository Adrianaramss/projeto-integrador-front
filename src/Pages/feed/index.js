import Header from "../../Components/header"
import Card from "../../Components/cardpost"
import { useNavigate } from "react-router-dom"
import {GlobalContext} from "../../context/GlobalContext"
import { useContext, useEffect, useState } from "react";
import { goToFeedPage } from "../../routes/coordinator"
import { StylePost } from "./styled"
import axios from "axios"
import { Div } from "../login/style"
import { BASE_URL } from "../../constants/BASE_URL"



export const FeedPage = () => {
    const navigate = useNavigate();

    const context = useContext(GlobalContext);
    const { postagem, fetchPostagem } = context;
    const [isLoading, setIsLoading] = useState(false)

    const [postContent, setPostContent] = useState("")
  
    useEffect(() => {
      const token = window.localStorage.getItem("labeedi-token");
  
      if (!token) {
        goToFeedPage(navigate);
      } else {
        fetchPostagem();
      }
    }, []);
  
    const createPostagem = async (e) => {
        e.preventDefault()
        setIsLoading(true)

  
      try {
        const token = window.localStorage.getItem("labeedi-token");

        const config = {
          headers: {
            Authorization: token
          }
        };
  
        const body = {
            content: postContent
          }
    
     await axios.post(`${BASE_URL}/posts`,body,config);
  
        setPostContent("");
        setIsLoading(false)
        fetchPostagem()
      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      }
    };
  

    
    return(
        <>
        <Header/>
        {/* <CreatePost/> */}
        <StylePost>
       <form onSubmit={createPostagem}>
          <section>
            <input value={postContent} onChange={(e) => setPostContent(e.target.value)}  placeholder="Escreva seu post.."  />
          </section>
          <button disabled={isLoading}>Postar</button>
          </form>
        <Div/>
        </StylePost>
        {postagem.map((postagem) => {
          return <Card key={postagem.id} postagem={postagem} />;
        })}
     
  
    </>
    )
}