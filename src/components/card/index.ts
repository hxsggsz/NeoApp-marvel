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
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  @media (max-width: 430px) {
    max-width: 90vw;
  } 
  
  .image-container {
    position: relative;
    border: .2rem solid var(--black);
    border-radius: 1rem;
    overflow: hidden;
    max-width: 30rem;
    max-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
      max-width: 30rem;
      max-height: 65vh;
    }

  img {
    width: 100%;
    height: 100%;
  }
}

.star {
  position: absolute;
  top: .5rem;
  right: .5rem;
  z-index: 99;
}

  .content {
    /* rem porque vw é relativo com o tamanho da tela e isso deixa o card gigante no desktop e o tamanho certo no mobile  */
    width: 30rem;
    max-width: 100vw;

    @media (min-width: 768px) {
      position: relative;
      margin-left: 1rem;
      height: 41rem;
    }
  }
  
  .content h1 {
    padding: 1rem  1.6rem .4rem 1.6rem;
    text-align: center;
  }
  
  .content h1:last-of-type {
    margin-bottom: 1rem;
    max-height: 48vh;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .buttons a {
    width: 100%;
    margin-left: 1.5rem;
  }

   .buttons {
     display: flex;
     width: 100%;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 1.5rem 0;
     
     @media (min-width: 768px) {
       position: absolute;
       bottom: 1rem;
    }
     @media (max-width: 430px) {
      padding: 0 1.4rem;
    }
  }
`;