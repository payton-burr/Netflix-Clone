import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 950px;
  width: 100%;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  width: 220px;
  background: #e50914;
  color: #ffffff;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  border-radius: 2px;

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
    width: auto;
    padding: 0 16px;
    margin-top: 1em;
  }
`;

export const Text = styled.p`
  width: 714px;
  font-size: 20px;
  margin: 0 5em;
  padding: 0 2.365em 1em;
  text-align: center;

  @media (max-width: 1000px) {
    padding: 6px;
    margin: 0;
  }
`;
