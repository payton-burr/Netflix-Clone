import React from 'react';
import BrowseContainer from '../containers/BrowseContainer';
import { useContent } from '../hooks';

function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  console.log(series);
  console.log(films);
  return <BrowseContainer />;
}

export default Browse;
