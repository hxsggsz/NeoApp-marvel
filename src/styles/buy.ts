import styled from 'styled-components';

export const StyledBuy = styled.div`
  .finish-buy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10rem;
    color: white;
  }

  .image {
    display: none;
    @media (min-width:1026px) {
      display: block;
      max-width: 350px;
      position: absolute;
      bottom: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    }
  }

  form {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper-buy {
    white-space: nowrap;
    whidth: 100%;
    
    @media (min-width: 768px) {
      width: 30%;
    }
  }
`;