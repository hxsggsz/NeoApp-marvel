import styled from 'styled-components';

export const StyledInfoCard = styled.div`
    background: var(--dark-grey);
    display: flex;
    gap: 2rem 0;
    text-align: center;
    align-items: center;
    flex-direction: column;
    max-width: 30rem;
    padding: .5rem;
    border-radius: .6rem;
    position: relative;

    .close {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: var(--white);

      &:hover {
        color: var(--red);
      }

      &:active {
        color: var(--black);
      }
    }

    .image-container {
      overflow: hidden;
      img {
        border-radius: .6rem;
        width: 28rem;
        height: 25rem;
        user-select: none;
        pointer-events: none;
        object-fit: fill;
      }
    }
`;