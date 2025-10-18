import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


function Home() {
    const{ usuario } = useContext(GlobalContext)
    const navigate = useNavigate()

    function testarNavigate(){
        navigate('/pagina3')
    }
  return (
    <div className='container-home'>
        <Navbar />
        <h1>Home/demo</h1>
        <p>Usuário: {usuario}</p>
        <button onClick={testarNavigate}>Testar navigate</button>
    </div>
  )
}

export default Home