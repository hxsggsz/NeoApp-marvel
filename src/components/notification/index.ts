import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledNotification = styled(motion.aside)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;

  .notification {
    display: flex;
    gap: 0 1rem;
    align-items: center;
    justify-content: center;
    width: 90%;
    z-index: 9999;
    padding:1rem;
    border: .4rem solid var(--white);
    border-radius: 1rem;
    background: var(--dark-grey);
    white-space: nowrap;
    
  @media (min-width: 768px) { 
      max-width: 50vw;
    }
  }
`;