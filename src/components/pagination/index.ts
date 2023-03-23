import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  gap: 2rem;
  
  margin-bottom: 5rem;
  button {
    min-width: 10rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: var(--red);
    border: .2rem solid var(--white);
    border-radius: .4rem;
    color: var(--white);
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