import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useNavigate } from 'react-router-dom';
function Home() {
    const {usuarioLogado, setUsuarioLogado, idadeUsuario} = useContext(GlobalContext)
    const navigate = useNavigate(); // Hook para navegação 

    function logar(){
      // processo de validação do usuário
      let nome = prompt("Username: ")
      let senha = prompt("Senha: ")
      if(senha == '1235'){
        setUsuarioLogado(nome)
        navigate('/final');
      }else{
        alert("Erro 403")
      }
    }

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}, {idadeUsuario} anos</p>

      <button onClick={logar}>Login</button>

    </div>
  )
}

export default Home
