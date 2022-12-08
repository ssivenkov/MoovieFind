import React, { useEffect } from 'react';

import { castPoster } from 'api/config';
import { Button } from 'components/common/button/Button';
import { Loader } from 'components/common/loader/Loader';
import { CREW_ENUM } from 'enum/crewEnum';
import { useStore } from 'hooks/useStore';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { CrewType } from 'store/moviePageStore/types';

import { CastCard } from './castCard/CastCard';
import {
  StyledCastContentContainer,
  StyledCategory,
  StyledContainer,
  StyledCrewCategoryContainer,
  StyledGroupCastContainer,
  StyledGroupCastCount,
  StyledGroupContainer,
  StyledGroupTitle,
  StyledGroupTitleContainer,
  StyledMovieContainer,
  StyledMovieTextContainer,
  StyledMovieTitle,
  StyledMovieWrapper,
  StyledPoster,
} from './styles';

export const MovieCastPage = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieID } = useParams<string>();

  const { appStore, moviePageStore } = useStore();

  const contentInitialized = appStore.contentInitialized;
  const cast = moviePageStore.cast.cast;
  const crew = moviePageStore.cast.crew;
  const movieTitle = moviePageStore.movie.title;
  const moviePoster = moviePageStore.movie.poster_path;

  const requestCondition = movieID && movieID !== String(moviePageStore.movie.id);
  const castCondition = moviePageStore.cast.cast.length > 0;
  const crewCondition = moviePageStore.cast.crew.length > 0;

  const castLength = moviePageStore.cast.cast.length;
  const crewLength = moviePageStore.cast.crew.length;
  const navigatePath = location.pathname.replace(`/${PATH.CAST}`, '');

  const crewCategory = (params: { crew: CrewType[]; category: CREW_ENUM }) => {
    const { crew, category } = params;

    const filteredCrew = crew.filter((item) => item.department === category);

    return _.sortBy(filteredCrew, ['job', 'name']);
  };

  const crewArt = crewCategory({ crew, category: CREW_ENUM.ART });
  const crewCamera = crewCategory({ crew, category: CREW_ENUM.CAMERA });
  const crewCostumeAndMakeUp = crewCategory({ crew, category: CREW_ENUM.COSTUME });
  const crewCrew = crewCategory({ crew, category: CREW_ENUM.CREW });
  const crewDirecting = crewCategory({ crew, category: CREW_ENUM.DIRECTING });
  const crewEditing = crewCategory({ crew, category: CREW_ENUM.EDITING });
  const crewLightning = crewCategory({ crew, category: CREW_ENUM.LIGHTNING });
  const crewProduction = crewCategory({ crew, category: CREW_ENUM.PRODUCTION });
  const crewSound = crewCategory({ crew, category: CREW_ENUM.SOUND });
  const crewVisualEffects = crewCategory({ crew, category: CREW_ENUM.VISUAL });
  const crewWriting = crewCategory({ crew, category: CREW_ENUM.WRITING });

  const onBackClick = () => {
    navigate(navigatePath);
  };

  const castContent = () => {
    return cast.map((item) => {
      return (
        <CastCard
          key={nanoid()}
          name={item.name}
          photoPath={item.profile_path}
          secondString={item.character}
        />
      );
    });
  };

  const crewContent = (array: CrewType[]) => {
    return array.map((item) => {
      return (
        <CastCard
          key={nanoid()}
          name={item.name}
          photoPath={item.profile_path}
          secondString={item.job}
        />
      );
    });
  };

  useEffect(() => {
    if (requestCondition) {
      moviePageStore.getMovie(movieID, appStore.language);
    }
  }, []);

  if (contentInitialized) {
    return (
      <StyledContainer>
        <StyledMovieWrapper>
          <StyledMovieContainer>
            <StyledPoster alt={movieTitle} src={`${castPoster}${moviePoster}`} />
            <StyledMovieTextContainer>
              <StyledMovieTitle>{movieTitle}</StyledMovieTitle>
              <Button leftIcon={<FaArrowLeft />} onClick={onBackClick}>
                Back to main
              </Button>
            </StyledMovieTextContainer>
          </StyledMovieContainer>
        </StyledMovieWrapper>
        <StyledCastContentContainer>
          {castCondition && (
            <StyledGroupContainer>
              <StyledGroupTitleContainer>
                <StyledGroupTitle>Cast</StyledGroupTitle>
                <StyledGroupCastCount>{castLength}</StyledGroupCastCount>
              </StyledGroupTitleContainer>
              <StyledGroupCastContainer>{castContent()}</StyledGroupCastContainer>
            </StyledGroupContainer>
          )}
          {crewCondition && (
            <StyledGroupContainer>
              <StyledGroupTitleContainer>
                <StyledGroupTitle>Crew</StyledGroupTitle>
                <StyledGroupCastCount>{crewLength}</StyledGroupCastCount>
              </StyledGroupTitleContainer>
              <StyledGroupCastContainer>
                {crewArt.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.ART}</StyledCategory>
                    {crewContent(crewArt)}
                  </StyledCrewCategoryContainer>
                )}
                {crewCamera.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.CAMERA}</StyledCategory>
                    {crewContent(crewCamera)}
                  </StyledCrewCategoryContainer>
                )}
                {crewCostumeAndMakeUp.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.COSTUME}</StyledCategory>
                    {crewContent(crewCostumeAndMakeUp)}
                  </StyledCrewCategoryContainer>
                )}
                {crewCrew.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.CREW}</StyledCategory>
                    {crewContent(crewCrew)}
                  </StyledCrewCategoryContainer>
                )}
                {crewDirecting.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.DIRECTING}</StyledCategory>
                    {crewContent(crewDirecting)}
                  </StyledCrewCategoryContainer>
                )}
                {crewEditing.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.EDITING}</StyledCategory>
                    {crewContent(crewEditing)}
                  </StyledCrewCategoryContainer>
                )}
                {crewLightning.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.LIGHTNING}</StyledCategory>
                    {crewContent(crewLightning)}
                  </StyledCrewCategoryContainer>
                )}
                {crewProduction.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.PRODUCTION}</StyledCategory>
                    {crewContent(crewProduction)}
                  </StyledCrewCategoryContainer>
                )}
                {crewSound.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.SOUND}</StyledCategory>
                    {crewContent(crewSound)}
                  </StyledCrewCategoryContainer>
                )}
                {crewVisualEffects.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.VISUAL}</StyledCategory>
                    {crewContent(crewVisualEffects)}
                  </StyledCrewCategoryContainer>
                )}
                {crewWriting.length > 0 && (
                  <StyledCrewCategoryContainer>
                    <StyledCategory>{CREW_ENUM.WRITING}</StyledCategory>
                    {crewContent(crewWriting)}
                  </StyledCrewCategoryContainer>
                )}
              </StyledGroupCastContainer>
            </StyledGroupContainer>
          )}
        </StyledCastContentContainer>
      </StyledContainer>
    );
  }

  return <Loader />;
});
