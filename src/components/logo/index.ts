import styled from 'styled-components';

export const StyledLogo = styled.div`
  z-index: 99;
  top: 1.5rem;
  left: 1.5rem;
  position: absolute;

  @media (min-width: 768px) {
    top: 4.9rem;
    left: 4.9rem;
    
    img {
      width: 18rem;
      height: 8rem;
    }
  }

  @media (max-width: 400px) {
  img {
    width: 10rem;
    height: 5rem;
  
  }
  }
`;