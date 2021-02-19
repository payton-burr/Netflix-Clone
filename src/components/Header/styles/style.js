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
`;

export const Link = styled.p``;

export const Logo = styled.img`
  width: 133.2px;
  height: 36px;
  margin-top: -8px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    height: 45px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)``;
