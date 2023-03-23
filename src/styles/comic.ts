import styled from 'styled-components';

export const StyledComic = styled.section`
  .main-content {
    overflow-x: hidden;
    padding-top: 1rem;
    display: flex;
    gap: 2rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (min-width: 768px) {
      overflow: hidden;
    }

    form {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-align: start;
      margin-left: 2rem;
    }
  }

  .main-content h1 {
    padding: 2rem 1rem;
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
      margin-bottom: 2rem;
      justify-content: center;
  }
}
`;