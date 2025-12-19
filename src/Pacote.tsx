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
}
export default function Pacote({pacote}:PacoteProps){
    return (
        <div className="pacote">
                <dt>{pacote.id}</dt>
                <dd></dd>
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