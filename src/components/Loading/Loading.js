import React from 'react';
import { Spinner, LockBody, ReleaseBody } from './styles/style';

function Loading({ ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody({ ...restProps }) {
  return <ReleaseBody {...restProps} />;
};

export default Loading;
