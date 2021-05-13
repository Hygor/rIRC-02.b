import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121212;
  padding: 4rem 0;

  header {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .2s ease-in-out;


    button {
      font-weight: 600;
      border-radius: 2rem;
      border: 2px solid;
      background: transparent;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: all .2s ease-in-out;

      .text {
        padding: 1rem 1.6rem;
      }

      .icon {
        display: flex;
        padding: 1rem;
        background: transparent;
        border-radius: 0 1.6rem 1.6rem 0;
        margin: 0 auto;
      }

      &:hover {
        background-color: #282828;
      }
    }
  }
   

  @media screen and (max-width: 44rem) {
    padding: 6rem 0;
    
    header {
      flex-direction: column;
      padding: 2rem 0 8rem;
    }

    nav {
      margin-top: 3rem;
    }
  }

  @media screen and (min-width: 44.001rem) and (max-width: 79.9rem) {

    header {
      max-width: 68rem;
    }
  }
`;
