import styled from 'styled-components';

export const StyledInfoCard = styled.div`
    background: var(--dark-grey);
    display: flex;
    gap: 2rem 0;
    text-align: center;
    align-items: center;
    flex-direction: column;
    max-width: 20rem;
    min-height: 35vh;
    padding: .5rem;
    border-radius: .6rem;
    position: relative;
    
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: top;
      padding: 0 1rem;
      position: absolute;
      top: 1rem;
      left: 0;
      
      .close {
        color: var(--white);

        :hover {
          color: var(--red);
        }
  
        &:active {
          color: var(--black);
        }
      }
    }

    .image-container {
      overflow: hidden;
      img {
        border-radius: .6rem;
        width: 18.5rem;
        height: 15rem;
        user-select: none;
        pointer-events: none;
        object-fit: cover;
      }
    }
`;