import { MovieFilterType, TimeFilterType } from 'types/common/FilterTypes';

export type InitialMainStateType = {
  WhatsPopularFilter: MovieFilterType;
  TrendingFilter: MovieFilterType;
  TrendingTimeFilter: TimeFilterType;
  SearchImageLink: string;
};
