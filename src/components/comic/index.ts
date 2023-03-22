import styled from 'styled-components';

export const StyledComic = styled.main`
  .image-container {
    position: absolute;
    img {
      width: 100vw;
      height: 70vh;
    }
    @media (min-width: 768px) {
      left: 1rem;
      top: 1rem;
      img {
        width: 40vw;
        height: 96vh;
        border-radius: 1.6rem;
      }
    }
  }

  .wrapper {
    overflow-y: auto;
    width: 100vw;
    height: 60vh;
    bottom: 0;
    position: absolute;
    border: .4rem solid white;
    border-radius: 1.6rem 1.6rem 0  0;
    
    @media (min-width: 768px) {
      top: 1rem;
      right: 1rem;
      max-width: 55vw;
      height: 96vh;
      border-radius: 1.6rem;
    }

      /* scrollbar */
      &::-webkit-scrollbar {
        width: 7px;
        background: var(--black);
        border: none; 
        border-radius: 0 1.6rem 0  0;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--white);
        border-radius: 4px;
      }    
    } 
`;