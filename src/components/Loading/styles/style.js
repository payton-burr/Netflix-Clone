import styled, { createGlobalStyle } from 'styled-components';

export const Picture = styled.img``;

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`;
