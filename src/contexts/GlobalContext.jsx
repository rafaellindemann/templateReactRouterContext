import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'


    return(
        <GlobalContext.Provider value={{usuarioLogado}}>
            {children}
        </GlobalContext.Provider>
    )
}
