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
  @media (min-width: 768px) {
      object-fit: fill;
      width: 100vw;
      margin-right: 0;
    }
    }
`;