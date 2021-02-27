import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Picture, LockBody, ReleaseBody } from './styles/style';

function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody({ ...restProps }) {
  return <ReleaseBody {...restProps} />;
};

Loading.propTypes = {
  src: PropTypes.string,
};

export default Loading;
