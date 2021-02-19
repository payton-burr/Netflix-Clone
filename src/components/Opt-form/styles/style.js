import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top 50px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
  }
`;

// Modify padding below to 10px 10px 0
// Change placeholder to a label to properly animate
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const Button = styled.button``;

export const Text = styled.p``;
