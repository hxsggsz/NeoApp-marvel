import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  min-height: 4rem;
  border: none;
  padding: .5rem 0;
  background: var(--red);
  border-radius: 1.2rem;
  transition: all 0.1s;
  font-size: min(5vw, 3.2rem);
  color: var(--white);
  font-weight: bold;
  &:hover {
    background: var(--white);
    color: var(--black);
  }
  
  &:active {
    background: var(--black);
    color: var(--white);
  }
`;