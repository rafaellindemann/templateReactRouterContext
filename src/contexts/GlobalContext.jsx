import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// let usuarioLogado = 'Gill Bates'
const [usuarioLogado, setUsuarioLogado] = useState('Gill Bates')
let idadeUsuario = '55'

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
