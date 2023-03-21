import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledCard = styled(motion.section)`
  cursor: pointer;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-grey);
  border-radius: 1rem;
  overflow: hidden;
  padding: .5rem;  
  max-width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
  }

.image-container {
  overflow: hidden;
  img {
    border: .2rem solid var(--black);
    border-radius: 1rem;
    
    @media (min-width: 768px) {
      width: 30.2rem;
    }
  }
}

  .content {
    /* rem porque vw é relativo com o tamanho da tela e isso deixa o card gigante no desktop e o tamanho certo no mobile  */
    width: 40rem;
    max-width: 100vw;

    @media (min-width: 768px) {
      margin-left: 1rem;
    }
  }
  
  .content h1 {
    padding: 1rem  0 .4rem .6rem;

  }

  .content h1:last-of-type {
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      margin-bottom: 5rem;
    }
  }
`;