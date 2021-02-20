import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: #ffffff;
  max-width: 640px;
  font-size: 50px;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2``;
