import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, LockBody, ReleaseBody } from './styles/style';

function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
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
