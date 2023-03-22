import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  position: relative;

  .container {
    display: flex;  
    flex-direction: column;
    align-items: center;
    gap: 4rem 0;
    justify-content: center;
  }
  .container section:first-child {
    margin-top: 30rem;
  }
`;