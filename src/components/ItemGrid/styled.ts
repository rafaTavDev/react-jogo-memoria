import styled from "styled-components";


export const ItemGridContainer = styled.div`
    width: 12rem;
    height: 12rem;
    background-color: blue;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px){
        width: 28vw;
        height: 28vw;
    }
`

export const Imagem = styled.img`
    width: 80%;
    height: auto;
    opacity: .5;
`