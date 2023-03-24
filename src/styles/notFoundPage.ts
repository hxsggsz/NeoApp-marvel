import styled from 'styled-components';

export const StyledNotFound = styled.main`
  @media(min-width: 768px) {
    display: flex;
  }

  .content {
    width: 100vw;
    margin-top: 15rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem 0;
  
    @media(min-width: 768px) {
    margin-top: 18rem;
  }
  }

  .image-container {
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    
    @media(min-width: 768px) {
      transform: scaleX(-1);
    }
  }
`;