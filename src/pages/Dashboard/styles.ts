import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;


  @media screen and (max-width: 44rem) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  @media screen and (min-width: 44.001rem) and (max-width: 79.999rem) {
    max-width: 68rem;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
  }
`;
