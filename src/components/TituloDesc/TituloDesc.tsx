import { useState } from "react"
import * as C from "./styled"

type Props = {
    titulo: string,
    desc: string | number
}

export function TituloDesc({titulo, desc}: Props){
    return (
        <C.ContainerTituloDesc>
            <C.Titulo>{titulo}</C.Titulo>
            <C.Desc>{desc}</C.Desc>
        </C.ContainerTituloDesc>
    )
}