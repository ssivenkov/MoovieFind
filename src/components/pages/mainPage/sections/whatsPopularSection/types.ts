import { MovieCardType } from 'store/movieCardsStore/types';
import { TVShowCardType } from 'store/tvShowCardsStore/types';

export type WhatsPopularSectionPropsType = {
  popularTVShows: TVShowCardType[];
  popularMovies: MovieCardType[];
  filter: string;
};
