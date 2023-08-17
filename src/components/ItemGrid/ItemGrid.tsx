import * as C from "./styled"
import interrog from "../../assets/interrog.png"

type Props = {
    img: string,
    mostrarImagem: boolean,
    cliqueFn: (pos: number) => void,
    pos: number
    confereFn: () => void,
    jogoOn: boolean
}


export function ItemGrid({img, mostrarImagem, cliqueFn, pos, confereFn, jogoOn}: Props){




    return (
        <C.ItemGridContainer onClick={() => {
            if(jogoOn){cliqueFn(pos)
            confereFn()}
        }} style={{backgroundColor: mostrarImagem ? "#000" : "#00f"}}>
            <C.Imagem src={mostrarImagem? img : interrog} />
        </C.ItemGridContainer>
    )
}