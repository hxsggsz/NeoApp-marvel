import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  position: relative;
  overflow: auto;
  .container {
    display: flex;  
    flex-direction: column;
    align-items: center;
    gap: 2rem 0;
    justify-content: center;
  }
  .container section:first-child {
    margin-top: 30rem;
  }
`;