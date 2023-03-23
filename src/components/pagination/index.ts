import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 95vw;
  justify-content: center;
  margin-bottom: 5rem;

  @media (min-width: 600px) {
      gap: 2rem;
  }

  button {
    min-width: 5rem;
    cursor: pointer;
    padding: 1rem;
    background: var(--red);
    border: .2rem solid var(--white);
    border-radius: .4rem;
    color: var(--white);
    
    @media (min-width: 413px) {
      padding: 1rem 2rem;
      min-width: 7rem;
    }
    
    @media (min-width: 600px) {
      gap: 2rem;
      min-width: 10rem;
      padding: 1.2rem 1rem;
  }
  }

  & .active {
    background: var(--white);
    border: .2rem solid var(--red);
    color: var(--red);
  }

  button, .active {
    font-size: 2rem;
  }
`;