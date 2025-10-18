import Navbar from "../components/Navbar"

function Final() {
  return (
      <GerencialContextProvider>
        <div>
            <Navbar />
          <h1>Final</h1>
          <p>Você chegou ao fim da internet, por enquanto...</p>
        </div>
      </GerencialContextProvider>
  )
}

export default Final
