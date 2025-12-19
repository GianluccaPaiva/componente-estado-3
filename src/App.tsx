import { useState } from 'react';
import './App.css'
import Pacote, { type PacoteType } from './Pacote'

const data: Array<PacoteType> = [
  {
    id: 'b88e3490-2ffd-44c7-af0e-00a4cb70b53d',
    largura: 10,
    profundidade:20,
    altura: 30,
    peso:5
  },
  {
    id: 'b28e3490-2ffd-44c7-af0e-00a4cb70b53d',
    largura: 5,
    profundidade:40,
    altura: 20,
    peso:1
  }
];

function App() {
  const [pacotes, setPacotes] = useState(data);

  function excluiPacote(id: string){
    setPacotes(pacotes.filter(pacote=> pacote.id !== id));
  }

  return (
    <dl>
      {
        pacotes.map(pacote =>
            <Pacote 
              key={pacote.id} 
              pacote={pacote} 
              onExcluir={()=>excluiPacote(pacote.id)} 
            />
        )
      }
    </dl>
    
  )
}

export default App
