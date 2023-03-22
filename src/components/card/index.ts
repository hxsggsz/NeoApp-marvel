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
  
  @media (max-width: 430px) {
    width: 100vw;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

.image-container {
  border: .2rem solid var(--black);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  img {
    @media (min-width: 768px) {
      width: 30.2rem;
      height: 100%;
      max-height: 50vh;
    }
  }
}

.star {
  color: var(--red);
  position: absolute;
  top: .5rem;
  right: .5rem;
}

  .content {
    /* rem porque vw é relativo com o tamanho da tela e isso deixa o card gigante no desktop e o tamanho certo no mobile  */
    width: 40rem;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      margin-left: 1rem;
      /* height: 10rem; */
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

  .dp {
    width: 50vw;
    height: 20vh;
    
    @media (min-width: 768px) {
      width: 35rem;
      height: 15rem;
    }
  }
`;