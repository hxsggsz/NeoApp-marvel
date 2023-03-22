import styled from 'styled-components';

export const StyledSkeleton = styled.section`
  border-radius: 1.2rem;
  width: 41rem;
  height: 50rem;
  background: var(--dark-grey);
  border: .2rem solid var(--dark-grey);
  display: flex;
  gap: 0 2rem;
  animation: skeleton-loading 1s linear infinite alternate;

  @media (min-width: 768px) {
    width: 73rem;
    height: 30rem;
  }

  @keyframes skeleton-loading {
    0% {
      background: var(--dark-grey)
    }

    100% {
      background: #a8b8c1
    }
  }
`;