import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado} = useContext(GlobalContext)
 

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>

    </div>
  )
}

export default Home
