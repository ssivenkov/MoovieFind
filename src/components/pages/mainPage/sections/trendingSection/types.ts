import { MovieCardType } from 'store/movieCardsStore/types';
import { TVShowCardType } from 'store/tvShowCardsStore/types';

export type TrendingSectionPropsType = {
  trendingTVShows: TVShowCardType[];
  trendingMovies: MovieCardType[];
  filter: string;
  timeFilter: string;
};
