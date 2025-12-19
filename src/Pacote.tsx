import "./Pacote.css"
export type PacoteType = {
    id:string;
    largura: number;
    profundidade: number;
    altura: number;
    peso:number
}

export type PacoteProps = {
    pacote:PacoteType;
    onExcluir: ()=>void;
}
export default function Pacote({pacote, onExcluir}:PacoteProps){
    return (
        <div className="pacote">
                <dt>{pacote.id}</dt>
                <dd>
                    <button onClick={onExcluir}>🗑️</button>
                </dd>
                <dt>Largura (cm)</dt>
                <dd>{pacote.largura}</dd>
                <dt>Porfundidade (cm)</dt>
                <dd>{pacote.profundidade}</dd>
                <dt>Altura (cm)</dt>
                <dd>{pacote.altura}</dd>
                <dt>Peso (kg)</dt>
                <dd>{pacote.peso}</dd>
        </div>
    )
}