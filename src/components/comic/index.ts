import styled from 'styled-components';

export const StyledComic = styled.main`
  .image-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }

    .left img {
      position: absolute;
      left: 0;
    }

    @media (min-width: 768px) {
      width: 50vw;
      height: 100vh;
      position: static;
      display: flex;
      justify-content: start;
      padding: 1.5rem 0;
      /* overflow: hidden; */
      img {
        object-fit: fill;
        width: 100%;
        height: 100vh;
      }
    }
  }

  .wrapper {
    overflow-y: auto;
    width: 100vw;
    height: 50vh;
    bottom: 0;
    position: absolute;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  border: .4rem solid white;
  border-radius: 1.6rem 1.6rem 0  0;
  
  @media (min-width: 768px) {
      background: none;
      backdrop-filter: blur(10px);
      border: none;
      top: 1rem;
      right: 1rem;
      max-width: 47vw;
      height: 96vh;
      border-radius: 1.6rem;
    }

      /* scrollbar */
      &::-webkit-scrollbar {
        width: 7px;
        background: none;
        border: none; 
        border-radius: 1.6rem ;
      }
      
      &::-webkit-scrollbar-thumb {
        background: var(--white);
        border-radius: 1.6rem ;
      }    
    } 

    .eye {
      user-select: none;
      position: absolute;
      right: 1rem;
      top: 1rem;

      @media (min-width: 768px) {
        display: none;
      }
    }
`;