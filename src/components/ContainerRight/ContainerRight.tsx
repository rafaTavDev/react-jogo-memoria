import { useEffect, useState } from "react"
import * as C from "./styled"
import {itens} from "../../helpers/itens"
import { ItemGrid } from '../../components/ItemGrid'

type Props = {
  vitoriaFn: () => void,
  aumentarQuant: () => void,
  jogoOn: boolean
}

export function ContainerRight({vitoriaFn, aumentarQuant, jogoOn}: Props){

    type Item = {img: string, mostrarImagem: boolean, ultimoClicado: boolean, pos: number}

    const [itensTela, setItensTela] = useState<Item[]>([])


    function comecarJogo(){
        let arrCop = [...itens, ...itens]
          .sort(() => Math.random() - 0.5)
          .map((item, index) => ({...item, mostrarImagem: false, ultimoClicado: false, pos: index}))
        setItensTela(arrCop)
      }






      function cliqueItem(pos: number){
        let arrCop = [...itensTela]
        arrCop[pos].mostrarImagem = true
        arrCop[pos].ultimoClicado = true
        setItensTela(arrCop)
      }

      function conferirIguais(){
        let arrItensTrue = itensTela.filter(item => item.ultimoClicado == true)
        let pos1 = arrItensTrue[0].pos
        let pos2 = arrItensTrue[1].pos
        if(arrItensTrue.length == 2){
            let arrCop = [...itensTela]
            if(arrItensTrue[0].img == arrItensTrue[1].img){
            }else{
                setTimeout(() => {
                    let arrCop2 = [...itensTela]
                    arrCop2[pos1].mostrarImagem = false
                    arrCop2[pos2].mostrarImagem = false
                    setItensTela(arrCop2)
                }, 700)
            }

            aumentarQuant()
            arrCop[pos1].ultimoClicado = false
            arrCop[pos2].ultimoClicado = false
            setItensTela(arrCop)
        }

        if(itensTela.filter(item => item.mostrarImagem == true).length == (itens.length * 2)){
          vitoriaFn()
        }
      }



      useEffect(() => {
        comecarJogo()
      }, [])

    return (
        <C.ContainerRight>
            {itensTela &&
            <C.ContainerGrid>
              {itensTela.map((item, index) => (
                <ItemGrid key={index} img={item.img} mostrarImagem={item.mostrarImagem} cliqueFn={cliqueItem} pos={item.pos} confereFn={conferirIguais} jogoOn={jogoOn}></ItemGrid>
              ))}
            </C.ContainerGrid>
          }
        </C.ContainerRight>
    )
}