import CardPost from "../../Components/cardpost"
import Header from "../../Components/header"
import {InputPostagem, ButtonPostar} from "../feed/styled"
import { Div } from "../login/style"

export const FeedPage = () => {
    return(
        <>
        <Header/>
        <InputPostagem  placeholder="Escreva seu post.."/>
        <ButtonPostar>Postar</ButtonPostar>
        <Div/>
        <CardPost/>

  
    </>
    )
}