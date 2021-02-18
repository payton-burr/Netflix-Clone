import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media (max-width: 1000px) {
    grid-templat-columns: repeat(auto-fill, minman(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  color: #757575;
  margin-bottom: 30px;
`;

export const Button = styled.button``;

export const Break = styled.div`
  flex-basis: 100%;
  height: 10px;
`;
