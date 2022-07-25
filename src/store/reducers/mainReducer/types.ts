import { SetSearchImageLinkActionReturnType } from 'store/actions/mainReducerActions/setSearchImageLinkAction';
import { SetTrendingFilterActionReturnType } from 'store/actions/mainReducerActions/setTrendingFilterAction';
import { SetTrendingTimeFilterActionReturnType } from 'store/actions/mainReducerActions/setTrendingTimeFilterAction';
import { SetWhatsPopularFilterActionReturnType } from 'store/actions/mainReducerActions/setWhatsPopularFilterAction';
import { MovieFilterType, TimeFilterType } from 'types/commonTypes/FilterTypes';

export type MainReducerStateType = {
  whatsPopularFilter: MovieFilterType;
  trendingFilter: MovieFilterType;
  trendingTimeFilter: TimeFilterType;
  searchImageLink: string;
};

export type MainReducerActionsType =
  | SetSearchImageLinkActionReturnType
  | SetTrendingFilterActionReturnType
  | SetTrendingTimeFilterActionReturnType
  | SetWhatsPopularFilterActionReturnType;
