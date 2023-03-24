import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  gap: 0 2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 95%;
  min-height: 4rem;
  border: none;
  padding: 1rem 0;
  background: var(--red);
  border-radius: 1.2rem;
  transition: all 0.1s;
  font-size: min(5vw, 2.4rem);
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

export const StyledSubmit = styled.button`
  cursor: pointer;
  border: none;
  padding: 1rem 1.5rem;
  transition: all 0.1s ease-in;
  background: none;
  color: var(--white);
  
  &:hover {
    color: var(--red);
  }
  
  &:active {
    color: var(--dark-grey);
  }
`;