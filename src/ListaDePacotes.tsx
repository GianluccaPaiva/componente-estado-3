import { useState } from "react";
import type { PacoteType } from "./Pacote"
import Pacote from "./Pacote"
type ListaDePacotes = {
    pacotes: Array<PacoteType>;
    excluiPacote: (id:string)=>void;
}
export default function ListaDePacotes({pacotes, excluiPacote}:ListaDePacotes){
    const [ordenacao, setOrdenacao] = useState('peso');
    return <dl>
        {
        pacotes.map(pacote =>
            <Pacote 
              key={pacote.id} 
              pacote={pacote} 
              onExcluir={()=>{excluiPacote(pacote.id)}} 
            />
        )
      }
    </dl>
}