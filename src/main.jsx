import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'

// Renderiza o componente App envolvido pelo provedor de contexto
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <App />  
    </UserProvider>
  </React.StrictMode>,
)



// Neste exemplo, estamos importando o provedor de contexto UserProvider e envolvendo o 
// componente App com ele. Isso garante que todos os componentes dentro de App tenham acesso
// ao contexto UserContext. A função ReactDOM.render é usada para renderizar o aplicativo no 
// elemento com o ID "root" no arquivo HTML.

