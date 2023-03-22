import styled from 'styled-components';

export const StyledLinkText = styled.h1`
  font-size: min(6vw, 2.4rem);
  font-weight: 700;

  &::after {
      content: '';
      height: .3rem;
      width: 13rem;
      display: flex;
      align-items: flex-start;
      background: var(--red);
      transform: scaleX(0);
      transition: transform 250ms ease-in; 
   }
   &:hover::after {
      transform: scaleX(1);
   }
`; 