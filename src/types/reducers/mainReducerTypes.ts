import { MovieFilterType, TimeFilterType } from 'types/commonTypes/FilterTypes';

export type InitialMainStateType = {
  WhatsPopularFilter: MovieFilterType;
  TrendingFilter: MovieFilterType;
  TrendingTimeFilter: TimeFilterType;
  SearchImageLink: string;
};
