import styled from "styled-components";

export const ContainerRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, auto);
    @media(max-width: 800px){
        grid-template-columns: repeat(3, 28vw);
    }
`