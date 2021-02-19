/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background url(${({ src }) =>
    src
      ? `/images/misc/${src}.jpg`
      : `images/misc/home-bg.jpg`}) top left / cover no-repeat;

@media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
}
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 950px) {
    margin: 0 45px;
  }
`;

export const Link = styled.p``;

export const Logo = styled.img`
  width: 133.2px;
  height: 36px;
  margin-right: 40px;
  margin-bottom: 8px;

  @media (max-width: 950px) {
    width: 108px;
    height: 30px;
  }

  @media (min-width: 1449px) {
    width: 167px;
    height: 45px;
    margin-bottom: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)``;
