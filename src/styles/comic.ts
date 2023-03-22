import styled from 'styled-components';

export const StyledComic = styled.section`
overflow-y: hidden;
.image-container {
  position: absolute;
  img {
    width: 100vw;
    height: 70vh;
  }
}

.main-content {
    overflow-y: auto;
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 4rem;
    bottom: 0;
    position: absolute;
    border-radius: 1.6rem 1.6rem 0  0;
    
    background: var(--dark-grey);

    /* scrollbar */
    &::-webkit-scrollbar {
      width: 7px;
      background: initial;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--white);
      border-radius: 4px;
    }    
  }

  .main-content h1:first-child {
    margin-top: 15rem;
  }
`;