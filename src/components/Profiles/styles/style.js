import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #ffffff;
  font-size: 67.2px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const User = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Image} {
    border: 3px solid #ffffff;
  }

  &:hover > ${Name} {
    color: #ffffff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
