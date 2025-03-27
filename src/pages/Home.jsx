import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useNavigate } from 'react-router-dom';
function Home() {
    const {usuarioLogado} = useContext(GlobalContext)
    const navigate = useNavigate(); // Hook para navegação 

    function logar(){
      navigate('/final');
    }

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>

      <button onClick={logar}>Login</button>

    </div>
  )
}

export default Home
