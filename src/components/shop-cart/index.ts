import styled from 'styled-components';
type ShopCartTypes = { isOpen: boolean }
export const StyledShop = styled.div<ShopCartTypes>`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  position: relative;

  .container {
    background: red;
  }

  .button {
    cursor: pointer;
    padding: 1.5rem;
    background: ${({ isOpen }) => isOpen ? "var(--dark-grey)" : "var(--red)"};
    border-radius: 5rem 0 0 5rem;
    position: fixed;
    bottom: 3rem;
    right: -.5rem;
    z-index: 99;
    border: .2rem solid var(--white);
  }
  
  .shop {
    width: 100vw;
    height: 100vh;
    z-index: 999;
    position: fixed;
    bottom: 0;
    right: 0;
    background: var(--dark-grey);
    border: .2rem solid var(--white);
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 768px) {
      bottom: 11rem;
      right: 0;
      width: 50vw;
      height: 80vh;
    }
    @media (min-width: 883px) {
      width: 40vw;
    }
    @media (min-width: 1220px) {
      width: 30vw;
    }
  }

  .shop header {
    border-radius: 1.2rem 1.2rem 0 0;
    background: var(--red);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .shop header .text {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }

  .shop button {
    position: absolute;
    bottom: 1rem;
  }

  ul {
    border: .2rem solid var(--white);
    overflow-y: auto;
    height: 70vh;
    width: 100%;

    @media (min-width: 768px) {
      height: 55vh;
    }

    &::-webkit-scrollbar {
      width: 7px;
      background: none;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--white);
      border-radius: 4px;
    }  
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  1.5rem 1rem;
    border-bottom: .2rem solid var(--white);
  }

  li .wrapper {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }

  .icon {
    position: relative;
  }

  .icon h1 {
    position: absolute;
    top: -2rem;
    right: -1rem;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--white);
    color: var(--red);
    border-radius: 50%;
  }

  .close {
      color: var(--white);

      &:hover {
        color: var(--red);
      }

      &:active {
        color: var(--black);
      }
    }
`;