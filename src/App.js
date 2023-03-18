import { Router } from './routes'
import { createGlobalStyle } from 'styled-components';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from './context/GlobalContext';
import { BASE_URL } from './constants/BASE_URL';
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  
  }
`;
const App = () => {
  const [postagem, setPostagem] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("labeedi-token");

    if (token) {
      fetchPostagem();
    }
  }, []);

  const fetchPostagem = async () => {
    try {
      const token = window.localStorage.getItem("labeedi-token");

      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(`${BASE_URL}/posts`,config);

      setPostagem(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  const context = {
    postagem,
    fetchPostagem
  };




    return (
      <>
      <GlobalStyle/>
      <GlobalContext.Provider value={context}>
      <Router/>
      </GlobalContext.Provider>
      </>
    )
}
export default App;
