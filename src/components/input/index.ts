import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  margin: 2rem 0;
  label {
    cursor: text;
    position: absolute;
    transform-origin: top left;
    transition: all 0.2s ease-out;
    transform: translate(0, -1rem) ;
  }

  & .active {
    transform: translate(0, -3.1rem);
  }

  &:focus-within label {
    transform: translate(0, -3.1rem);
  }

  label, input {
    padding-left: .5rem;
    font-size: min(5vw, 2rem);
    font-weight: 700;
    width: 100%;
    color: var(--white);
  }

  input {
    padding-bottom: .5rem;
    background: none;
    outline: none;
    border: none;
    border-bottom: .5rem solid var(--dark-grey);
    width: 25rem;
  }
  
  input:focus {
    transition: all 0.2s ease-out;
    border-bottom: .5rem solid var(--red);
  }
  
`;