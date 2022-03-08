import React from 'react';

import { useParams } from 'react-router-dom';

import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const MoviePage = (): ReturnComponentType => {
  const params = useParams();
  return (
    <div>
      <div>Movie page</div>
      <div>Movie ID: {params.movieID}</div>
    </div>
  );
};
