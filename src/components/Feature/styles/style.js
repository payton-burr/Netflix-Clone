import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222222;
  text-align: center;
  padding: 122px 45px 172px;
  max-width: 1000px;
  margin: 0 auto;
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

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
