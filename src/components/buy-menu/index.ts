import styled from 'styled-components';

export const StyledMenu = styled.div`
  header {
    background: var(--black);
    border-bottom: .2rem solid var(--dark-grey);
    width: 100vw;
    padding: 1rem 2rem;
    z-index: 999; 
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      cursor: pointer;
      background: none;
      border: none;
    }
  }

  .container {
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--black);
    border: .2rem solid var(--dark-grey);
    overflow: auto;
    
    @media (min-width: 625px) {
      width: 46rem;
      left: unset;
      right: 0;
    }
    
    &::-webkit-scrollbar {
      width: 7px;
      background: none;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--white);
      border-radius: 4px;
    }  
  }

  .container h1:first-child {
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 1rem;
  }

  .content {
    margin: 5rem 0 2rem 0;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
}
`;