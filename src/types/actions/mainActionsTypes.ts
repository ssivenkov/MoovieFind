import { DAY, MOVIE, TV, WEEK } from 'constants/common';

export type MovieFilterType = typeof TV | typeof MOVIE;
export type TimeFilterType = typeof DAY | typeof WEEK;

export type setWhatsPopularFilterActionType = {
  type: string;
  filter: MovieFilterType;
};

export type setTrendingFilterActionType = {
  type: string;
  filter: MovieFilterType;
};

export type setTrendingTimeFilterActionType = {
  type: string;
  filter: TimeFilterType;
};

export type MainActionsTypes =
  | setWhatsPopularFilterActionType
  | setTrendingFilterActionType
  | setTrendingTimeFilterActionType;
