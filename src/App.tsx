import * as C from "./AppStyles"
import { TituloDesc } from './components/TituloDesc'
import { ContainerRight } from './components/ContainerRight'
import { useEffect, useState } from "react"

export function App() {
  const [jogoOn, setJogoOn] = useState<boolean>(true)
  const [quantMov, setQuantMov] = useState(0)
  const [ganhou, setGanhou] = useState(false)
  const [perdeu, setPerdeu] = useState(false)
  const [s, setS] = useState(0)
  const [m, setM] = useState(0)

  function somarUmMovimento(){
    setQuantMov(quantMov + 1)
  }
  

  function tempo(){
    setS(s + 1)
    
    if(s == 59){
      setS(0)
      setM(m + 1)
    }

    if(m == 60){
      setJogoOn(false)
      setPerdeu(true)
    }
  }


  let intervalo1: number

  useEffect(() => {
    intervalo1 = setInterval(() => {if(jogoOn){tempo()}}, 1000)
    return () => clearInterval(intervalo1)
  })

  function vitoria(){
    setGanhou(true)
    setJogoOn(false)
  }


  function reset(comecarJogoFn: () => void){
    setJogoOn(true)
    setQuantMov(0)
    setS(0)
    setM(0)
    setGanhou(false)
    setPerdeu(false)
    comecarJogoFn()
  }

  return (
      <C.ContainerGeral>
        <C.ContainerLeft style={{alignItems: jogoOn? "flex-start" : "center"}}>
          {jogoOn?
            <>
              <C.TituloJogo>Jogo da memória</C.TituloJogo>
              <TituloDesc titulo="Movimentos" desc={quantMov} ></TituloDesc>
              <TituloDesc titulo="Tempo" desc={(m < 10? "0" + m : m) + ":" + (s < 10? "0" + s: s )} ></TituloDesc>
            </>
            :
                ganhou && !perdeu?
                <>
                  <C.TituloJogo>Parabéns!! Você ganhou o jogo com:</C.TituloJogo>
                  <C.DescsGanhou><strong>{quantMov}</strong> movimentos</C.DescsGanhou>
                  <C.DescsGanhou>Tempo: <strong>{(m < 10? "0" + m : m) + ":" + (s < 10? "0" + s: s )}</strong></C.DescsGanhou>
                </>
                :
                <>
                  <C.TituloJogo>Infelizmente você perdeu por excesso de tempo!</C.TituloJogo>
                </> 
        }
        </C.ContainerLeft>
        <ContainerRight vitoriaFn={vitoria} aumentarQuant={somarUmMovimento} jogoOn={jogoOn}></ContainerRight>
      </C.ContainerGeral>
  )
}

export default App


