import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledStar = styled(motion.div)`
  color: var(--red);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 30%;
  margin-bottom: 20rem;
  
  @media (min-width: 768px) {
    margin-bottom: 27rem;
  }
    
  h1 {
    background: var(--dark-grey);
    border-radius: 1.2rem;
    margin-top: .5rem;
    padding: .5rem 1rem;
  }
`;