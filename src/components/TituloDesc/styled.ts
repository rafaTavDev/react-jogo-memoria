import styled from "styled-components";

export const ContainerTituloDesc = styled.div`
    padding: 3rem 0 2rem 2rem;
    @media(max-width:800px){
        padding: 0 0 0 2rem;
    }
`

export const Titulo = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    font-size: 1rem;
`

export const Desc = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    @media(max-width: 800px){
        font-size: 1.4rem;
    }
`