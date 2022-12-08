/*import { CollectionAPI } from 'api/collectionAPI/collectionAPI';
import { CollectionResponseType } from 'api/collectionAPI/types';*/
import { api_key } from 'api/config';
import { MovieAPI } from 'api/movieAPI/movieAPI';
import { CastResponseType } from 'api/movieAPI/types';
import { AxiosResponse } from 'axios';
import { store } from 'index';
import { cast, flow, types } from 'mobx-state-tree';
import { APIKeyRequestType, LanguageRequestType } from 'types/api/requestTypes';

import { initialMoviePageValue } from './initialValues';
import { ExternalLinksType, MoviePageType } from './types';

const BelongsToCollectionModel = types.model({
  backdrop_path: types.string,
  id: types.identifierNumber,
  name: types.string,
  poster_path: types.string,
});

const GenreModel = types.model('Genre').props({
  id: types.identifierNumber,
  name: types.string,
});

const ProductionCompanyModel = types.model('ProductionCompany').props({
  name: types.string,
  id: types.identifierNumber,
  logo_path: types.maybeNull(types.string),
  origin_country: types.string,
});

const ProductionCountryModel = types.model('ProductionCountry').props({
  iso_3166_1: types.string,
  name: types.string,
});

const SpokenLanguageModel = types.model('SpokenLanguage').props({
  iso_639_1: types.string,
  name: types.string,
});

const MoviePageModel = types.model('MovieCard').props({
  id: types.identifierNumber,
  adult: types.boolean,
  backdrop_path: types.maybeNull(types.string),
  belongs_to_collection: types.maybeNull(BelongsToCollectionModel),
  budget: types.number,
  genres: types.array(GenreModel),
  homepage: types.maybeNull(types.string),
  imdb_id: types.maybeNull(types.string),
  original_language: types.string,
  original_title: types.string,
  overview: types.maybeNull(types.string),
  popularity: types.number,
  poster_path: types.maybeNull(types.string),
  production_companies: types.array(ProductionCompanyModel),
  production_countries: types.array(ProductionCountryModel),
  release_date: types.string,
  revenue: types.number,
  runtime: types.maybeNull(types.number),
  spoken_languages: types.array(SpokenLanguageModel),
  status: types.string,
  tagline: types.maybeNull(types.string),
  title: types.string,
  video: types.boolean,
  vote_average: types.number,
  vote_count: types.number,
});

const CastModel = types.model('Cast').props({
  adult: types.boolean,
  gender: types.maybeNull(types.number),
  id: types.number,
  known_for_department: types.string,
  name: types.string,
  original_name: types.string,
  popularity: types.number,
  profile_path: types.maybeNull(types.string),
  cast_id: types.number,
  character: types.string,
  credit_id: types.string,
  order: types.number,
});

const CrewModel = types.model('Crew').props({
  adult: types.boolean,
  gender: types.maybeNull(types.number),
  id: types.number,
  known_for_department: types.string,
  name: types.string,
  original_name: types.string,
  popularity: types.number,
  profile_path: types.maybeNull(types.string),
  credit_id: types.string,
  department: types.string,
  job: types.string,
});

const CastDataModel = types.model('CastData').props({
  id: types.number,
  cast: types.array(CastModel),
  crew: types.array(CrewModel),
});

const ExternalLinksModel = types.model('ExternalLinks').props({
  imdb_id: types.maybeNull(types.string),
  facebook_id: types.maybeNull(types.string),
  instagram_id: types.maybeNull(types.string),
  twitter_id: types.maybeNull(types.string),
  id: types.maybeNull(types.number),
});

export const MoviePageStoreModel = types
  .model('MoviePageStore')
  .props({
    movie: MoviePageModel,
    cast: CastDataModel,
    externalLinks: ExternalLinksModel,
  })
  .actions((self) => {
    return {
      getMovie: flow(function* (movieID: string, language: string) {
        try {
          store.appStore.setAppInitialized(false);
          self.movie = cast(initialMoviePageValue);

          const requestObject: LanguageRequestType = { api_key, language };
          const apiKey: APIKeyRequestType = { api_key };

          const movieResponse: AxiosResponse<MoviePageType> = yield MovieAPI.getMovie(
            movieID,
            requestObject,
          );

          /* let collectionResponse: AxiosResponse<CollectionResponseType>;

          if (movieResponse.data.belongs_to_collection?.id) {
            collectionResponse = yield CollectionAPI.getCollection(
              movieResponse.data.belongs_to_collection?.id,
              requestObject,
            );
          }*/

          const externalLinksResponse: AxiosResponse<ExternalLinksType> =
            yield MovieAPI.getExternalLinks(movieID, apiKey);
          const castResponse: AxiosResponse<CastResponseType> =
            yield MovieAPI.getCastData(movieID, apiKey);

          self.movie = cast(movieResponse.data);
          self.externalLinks = cast(externalLinksResponse.data);
          self.cast = cast(castResponse.data);

          store.appStore.setContentInitialized(true);
        } catch (error) {
          store.appStore.setModalText(`Error getting movie. ${error}`);
        } finally {
          store.appStore.setAppInitialized(true);
        }
      }),
    };
  });
