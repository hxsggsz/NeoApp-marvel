import styled from 'styled-components';

type NotificationTypes = { error: boolean}

export const StyledNotification = styled.aside<NotificationTypes>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  z-index: 99999;
  
  .notification {
    display: flex;
    gap: 0 1rem;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 2rem 4rem;
    border: ${({ error }) => error ? ".4rem solid var(--red)" : ".4rem solid var(--white)"}; 
    border-radius: 1rem;
    background: var(--dark-grey);

    h1 {
      font-size: min(6vw, 2.4rem);
      color: ${({ error }) => error ? "var(--red)" : "var(--white)"};
    }
    
  @media (min-width: 768px) { 
      max-width: 50vw;
    }
  }
`;