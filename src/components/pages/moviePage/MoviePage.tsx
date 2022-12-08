import React, { useEffect } from 'react';

import { Loader } from 'components/common/loader/Loader';
import {
  StyledButtonContainer,
  StyledCastContentContainer,
  StyledCastContentWrapper,
  StyledCastLink,
  StyledCastSectionContainer,
  StyledCollectionSectionContainer,
  StyledCollectionText,
  StyledCollectionTitle,
  StyledDescriptionContainer,
  StyledExternalLinksContainer,
  StyledInfoContainer,
  StyledMovieInfoContainer,
  StyledMoviePageContainer,
  StyledMovieSectionContainer,
  StyledMovieTitle,
  StyledOverviewTitle,
  StyledPosterContainer,
  StyledSectionTitle,
  StyledTagline,
} from 'components/pages/moviePage/styles';
import { formatByNameHelper } from 'helpers/formatByNameHelper';
import { timeFormatHelper } from 'helpers/timeFormatHelper';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { PATH } from 'routes/routes';
import SimpleBar from 'simplebar-react';
import { ComponentType } from 'types/common/componentType';

import { Button } from '../../common/button/Button';

import { CastCard } from './cards/castCard/CastCard';
import { ExtraCard } from './cards/extraCard/ExtraCard';
import { LinkButton } from './linkButton/LinkButton';
import { Poster } from './poster/Poster';

export const MoviePage = observer((): ComponentType => {
  const { movieID } = useParams<string>();

  const { appStore, moviePageStore } = useStore();

  const isoConv = require('iso-language-converter');

  const contentInitialized = appStore.contentInitialized;
  const requestCondition = movieID && movieID !== String(moviePageStore.movie.id);
  const cast = moviePageStore.cast.cast;
  const castCondition = cast && cast.length > 0;
  const castCardsCount = 9;

  const movie = moviePageStore.movie;

  const externalLinks = moviePageStore.externalLinks;

  const posterPath = movie.poster_path ? movie.poster_path : '';
  const movieBackgroundPath = movie.backdrop_path ? movie.backdrop_path : '';
  const collectionBackgroundPath = movie.belongs_to_collection
    ? movie.belongs_to_collection.backdrop_path
    : '';

  const collectionId = movie.belongs_to_collection?.id;
  const collectionTitle = movie.belongs_to_collection?.name;

  const title = movie.title ? movie.title : 'No title';

  const movieTime =
    movie.runtime && movie.runtime > 0 ? timeFormatHelper(movie.runtime) : '';

  const releaseDate = movie.release_date
    ? moment(movie.release_date).format('MMMM DD, YYYY')
    : '';

  const genres =
    movie.genres && movie.genres.length > 0 ? formatByNameHelper(movie.genres) : '';

  const userScore =
    movie.vote_average && movie.vote_average > 0
      ? movie.vote_average.toFixed(1)
      : 'No user scores';

  const tagline = movie.tagline ? movie.tagline : '';

  const overview = movie.overview ? movie.overview : '';

  const status = movie.status ? movie.status : '';

  const originalLanguage = movie.original_language ? movie.original_language : '';
  const convertedOriginalLanguage = originalLanguage
    ? isoConv(originalLanguage)
    : originalLanguage;

  const budget = movie.budget && movie.budget > 0 ? movie.budget : '';

  const revenue = movie.revenue && movie.revenue > 0 ? movie.revenue : '';

  const productionCompanies = movie.production_companies
    ? formatByNameHelper(movie.production_companies)
    : '';

  const homepage = movie.homepage ? movie.homepage : '';

  const getCastContent = () => (
    <>
      {cast.slice(0, castCardsCount).map((item) => {
        const { character, id, name, profile_path } = item;

        return (
          <CastCard
            character={character}
            key={id}
            name={name}
            profile_path={profile_path}
          />
        );
      })}
      {cast.length >= castCardsCount && <ExtraCard linkTo={PATH.CAST} />}
    </>
  );

  useEffect(() => {
    if (requestCondition) {
      moviePageStore.getMovie(movieID, appStore.language);
    }
  }, []);

  if (contentInitialized) {
    return (
      <StyledMoviePageContainer>
        <StyledMovieSectionContainer background={movieBackgroundPath}>
          <StyledPosterContainer>
            <Poster posterLink={posterPath} />
            <StyledExternalLinksContainer>
              {externalLinks.facebook_id && (
                <LinkButton
                  icon={<FaFacebook />}
                  link={`https://facebook.com/${externalLinks.facebook_id}`}
                />
              )}
              {externalLinks.twitter_id && (
                <LinkButton
                  icon={<FaTwitter />}
                  link={`https://twitter.com/${externalLinks.twitter_id}`}
                />
              )}
              {externalLinks.instagram_id && (
                <LinkButton
                  icon={<FaInstagram />}
                  link={`https://instagtam.com/${externalLinks.instagram_id}`}
                />
              )}
              {homepage && <LinkButton icon={<IoMdHome />} link={homepage} />}
            </StyledExternalLinksContainer>
          </StyledPosterContainer>
          <StyledMovieInfoContainer>
            <StyledInfoContainer>
              <StyledMovieTitle>{title}</StyledMovieTitle>
              {releaseDate && <div>{`Release date: ${releaseDate}`}</div>}
              {movieTime && <div>{`Duration: ${movieTime[0]}h ${movieTime[1]}m`}</div>}
              <div>{`User score: ${userScore}`}</div>
              {genres && <div>{`Genres: ${genres}`}</div>}
            </StyledInfoContainer>
            <StyledDescriptionContainer>
              {tagline && <StyledTagline>{tagline}</StyledTagline>}
              {overview && (
                <div>
                  <StyledOverviewTitle>Overview</StyledOverviewTitle>
                  {overview}
                </div>
              )}
            </StyledDescriptionContainer>
            <StyledInfoContainer>
              {status && <div>{`Status: ${status}`}</div>}
              {originalLanguage && (
                <div>{`Original language: ${convertedOriginalLanguage}`}</div>
              )}
              {budget && <div>{`Budget: $${budget.toLocaleString('en')}`}</div>}
              {revenue && <div>{`Revenue: $${revenue.toLocaleString('en')}`}</div>}
              {productionCompanies && (
                <div>{`Production companies: ${productionCompanies}`}</div>
              )}
            </StyledInfoContainer>
          </StyledMovieInfoContainer>
        </StyledMovieSectionContainer>
        {castCondition && (
          <StyledCastSectionContainer>
            <StyledSectionTitle>Top Billed Cast</StyledSectionTitle>
            <StyledCastContentWrapper>
              <SimpleBar autoHide={false}>
                <StyledCastContentContainer>
                  {getCastContent()}
                </StyledCastContentContainer>
              </SimpleBar>
            </StyledCastContentWrapper>
            <StyledCastLink to={PATH.CAST}>Full Cast & Crew</StyledCastLink>
          </StyledCastSectionContainer>
        )}
        {collectionId && (
          <StyledCollectionSectionContainer background={collectionBackgroundPath}>
            <StyledCollectionTitle>{`Part of the ${collectionTitle}`}</StyledCollectionTitle>
            <StyledCollectionText>Includes ...</StyledCollectionText>
            <StyledButtonContainer>
              <Button>View the collection</Button>
            </StyledButtonContainer>
          </StyledCollectionSectionContainer>
        )}
      </StyledMoviePageContainer>
    );
  }

  return <Loader />;
});
