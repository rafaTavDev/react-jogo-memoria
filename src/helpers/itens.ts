import konoha from "../assets/konoha.svg"
import akatsuki from "../assets/akatsuki.svg"
import anbu from "../assets/anbu.svg"
import gaara from "../assets/gaara.svg"
import kunai from "../assets/kunai.svg"
import lamen from "../assets/lamen.svg"

export type Item = {img: string, mostrarImagem?: boolean, ultimoClicado?: boolean, pos?: number}

export let itens: Item[] = [
    {img: konoha},
    {img: akatsuki},
    {img: anbu},
    {img: gaara},
    {img: kunai},
    {img: lamen}
]