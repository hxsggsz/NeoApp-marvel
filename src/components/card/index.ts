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
  
  @media (max-width: 430px) {
    max-width: 100vw;
  } 

  @media (min-width: 768px) {
    flex-direction: row;
  }

.image-container {
  border: .2rem solid var(--black);
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  position: relative;
  img {
    @media (min-width: 768px) {
      width: 30.2rem;
      height: 100%;
      max-height: 65vh;
    }
    @media (max-width: 430px) {
    max-width: 100vw;
  } 
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
    width: 40rem;
    max-width: 100vw;
    
    
    @media (min-width: 768px) {
      position: relative;
      margin-left: 1rem;
      height: 41rem;
    }
  }
  
  .content h1 {
    padding: 1rem  0 .4rem .6rem;
  }
  
  .content h1:last-of-type {
    margin-bottom: 1rem;
    border: 1px solid red;
    max-height: 48vh;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

   .buttons {
     display: flex;
     width: 100%;
     flex-direction: column;
     gap: 1.5rem;
     @media (min-width: 768px) {
       position: absolute;
       bottom: 0;
    }
  }
`;