import { MovieFilterType, TimeFilterType } from 'types/common/FilterTypes';

export type InitialMainStateType = {
  WhatsPopularFilter: MovieFilterType | TimeFilterType;
  LatestTrailersFilter: MovieFilterType | TimeFilterType;
  TrendingFilter: MovieFilterType | TimeFilterType;
  TrendingTimeFilter: MovieFilterType | TimeFilterType;
};
