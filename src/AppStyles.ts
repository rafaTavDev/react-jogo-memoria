import styled from "styled-components";

export const ContainerGeral = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px){
        flex-direction: column;
        height: auto;
        justify-content: space-around;
    }
`



/* CONTAINER LEFT */
export const ContainerLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px){
   
    }
`

export const TituloJogo = styled.div`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    align-self: center;
    margin-bottom: 2rem;
    @media(max-width: 800px){
        font-size: 0.8rem;
        align-self: flex-start;
    }
`






/* CONTAINER RIGHT */






/* GANHOU */

export const DescsGanhou = styled.div`
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    @media(max-width: 800px){
        font-size: 1rem;
    }
`

export const BotaoReset = styled.button`
    font-family: "Montserrat", sans-serif;
    border: none;
    padding: 1rem 4rem;
    border-radius: 1rem;
    background-color: #00f;
    color: #fff;
    font-size: 1.5rem;
    margin-top: 2rem;
    cursor: pointer;
`