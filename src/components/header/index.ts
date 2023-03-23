import styled from 'styled-components';

export const StyledHeader = styled.div`
display: flex;
align-items: start;
justify-content: center;
width: 100vw;
height: 100vh;
img {
  /* a imagem nao tem o texto centralizado :P */
    margin-right: 8rem;
    width: auto;
    height: auto;
    object-fit: scale-down;
    /* object-position: center; */
    }
`;