import styled from 'styled-components';

export const StyledLogo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  @media (min-width: 768px) {
    top: 4.9rem;
    left: 4.9rem;
    
    img {
      width: 18rem;
      height: 8rem;
    }
  }
`;