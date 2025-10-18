# Template para projeto React

Template para projeto React, contendo:
- Contexto global com useContext;
- Roteamento de páginas com react-router-dom

Ideal para usar como base para começar um projeto React depois do almoço.

---

Este documento descreve o procedimento para criar um template para router e context no React. O foco é na estrutura agnóstica de conteúdo, usando as páginas **`Home`**, **`Pagina1`**, **`Pagina2`**, e **`Pagina3`** como exemplos. Este repositório apresenta o template já construído e com uma leve demonstração :D

---

# Guia de Configuração Inicial do Template React

Este template está configurado com **React Router DOM** para navegação e **Context API** para gerenciamento de estado global. Siga este guia para entender e replicar a arquitetura.

## 0. Instalação da dependência

```jsx
npm install react-router-dom
```

## 1. Configuração do React Router DOM (Rotas e Navegação)

A navegação é centralizada nos arquivos `routes.jsx` e `Navbar.jsx`.

### Passo 1.1: Definição das Rotas (`router/routes.jsx`)

Este arquivo define todas as URLs e seus componentes correspondentes, incluindo a raiz (`/`) e as páginas genéricas.

- **Ação:** O `createBrowserRouter` mapeia os caminhos das rotas para os componentes de página correspondentes, como `Home` (para `/`) e as páginas genéricas.

JavaScript

```jsx
// routes.jsx
import { createBrowserRouter } from "react-router-dom"; 
// Importa todos os componentes de página
import Home from "../pages/Home";
import Pagina1 from "../pages/Pagina1";
import Pagina2 from "../pages/Pagina2";
import Pagina3 from "../pages/Pagina3";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/Pagina1", element: <Pagina1 />},
    {path: "/pagina2", element: <Pagina2 />},
    {path: "/pagina3", element: <Pagina3 />},
])

export default router;
```

### Passo 1.2: Aplicação do Provedor de Rotas (`main.jsx`)

O `RouterProvider` envolve toda a aplicação, tornando o roteamento disponível em todos os componentes.

- **Ação:** Importe e utilize o `RouterProvider` no arquivo `main.jsx`.

JavaScript

```jsx
// main.jsx (Estrutura)
// ...
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'
// ...
createRoot(document.getElementById('root')).render(
  // ... (Envolvido pelo GlobalContextProvider)
    <RouterProvider router={router}>
    </RouterProvider>// ... (Envolvido pelo GlobalContextProvider)
)
```

### Passo 1.3: Criação dos Links de Navegação (`components/Navbar.jsx`)

A `Navbar` utiliza o componente `<Link>` para permitir a navegação entre as páginas sem recarregar a tela.

- **Ação:** Configure os `<Link>` com o atributo `to` apontando para as URLs definidas no `routes.jsx`.

JavaScript

```jsx
// Navbar.jsx
import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/pagina1">Página 1</Link>
        <Link to="/pagina2">Página II</Link>
        <Link to="/pagina3">Página três</Link>
    </nav>
  )
}
// ...
```

---

## 2. Configuração do Context API (Gerenciamento de Estado Global)

O estado global está definido no `GlobalContext.jsx` e aplicado no `main.jsx`.

### Passo 2.1: Definição do Contexto e Provedor (`contexts/GlobalContext.jsx`)

O `GlobalContext` é onde o estado global é criado usando `useState` e, em seguida, compartilhado.

- **Ação:** Defina o Contexto e o Provedor. O estado (`usuario` e `setUsuario`) é definido com `useState` e passado no objeto `value` do `Provider` para ser acessível globalmente.

JavaScript

```jsx
// GlobalContext.jsx
import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState("Lúcio Fernando")

    return(
        <GlobalContext.Provider value={{
                usuario, setUsuario
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
```

### Passo 2.2: Aplicação do Provedor no Nível Raiz (`main.jsx`)

O `GlobalContextProvider` deve envolver o `RouterProvider` para que o estado esteja disponível para todas as rotas e componentes.

- **Ação:** Importe o `GlobalContextProvider` e envolva o `RouterProvider` com ele no arquivo `main.jsx`.

JavaScript

```jsx
// main.jsx (Estrutura)
// ...
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'
// ...
createRoot(document.getElementById('root')).render(
  // O GlobalContext envolve o Router
  <GlobalContextProvider>
    <RouterProvider router={router}>
    </RouterProvider>
  </GlobalContextProvider>
)
```

### Passo 2.3: Consumindo o Contexto e Navegação Programática (Ex: `pages/Home.jsx`)

Este template demonstra o consumo de contexto (`useContext`) e a navegação programática (`useNavigate`) em uma página de exemplo.

- **Consumo:** O hook `useContext(GlobalContext)` é usado para acessar o estado global (`usuario`).
- **Navegação:** O hook `useNavigate()` é usado para navegar para outras rotas (ex: `/pagina3`) através de uma função ou evento.

JavaScript

```jsx
// Home.jsx (Exemplo de Consumo e Navegação)
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'
// ...

function Home() {
    const{ usuario } = useContext(GlobalContext) // Consumo do estado
    const navigate = useNavigate() // Hook de navegação

    function testarNavigate(){
        navigate('/pagina3') // Navega para a URL /pagina3
    }
    // ...
}
// ...
```

---
Para uma explicação mais delicinha e detalhada do que tem em cada arquivo e o que eles fazem, dá uma espiada neste documento: [https://rafaellindemann.notion.site/Router-e-context-27ed393ff68e80868187e1176940b31a?pvs=74](https://rafaellindemann.notion.site/Router-e-context-27ed393ff68e80868187e1176940b31a?pvs=74)