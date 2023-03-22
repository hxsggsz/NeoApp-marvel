import styled from 'styled-components';

export const StyledComic = styled.section`
  .main-content {
    overflow-x: hidden;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--black);

    @media (min-width: 768px) {
      overflow: hidden;
    }

    form {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .main-content h1 {
    width: 100%;
    border-bottom: .2rem solid var(--white);
    padding: 2rem 0;
  }
  .main-content a h1 {
    border-bottom: none;
    margin-bottom: 2rem;
  }

  .options {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
      margin-top: 2rem;
  }
}
`;