import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
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
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  font-size: 16px;
  border-width: 5px;
  border: 1px solid #8c8c8c;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right: 1px solid #333333;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: #ffffff;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: 1px solid #333333;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 10px;
    height: 20px;

    @media (max-width: 1000px) {
      width: 6px;
      height: 12px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 16px;
    margin-top: 1em;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: #ffffff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
