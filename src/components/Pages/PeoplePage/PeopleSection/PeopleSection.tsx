import { FC } from 'react';

import { PeopleCard } from 'components/common/Card/PeopleCard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/Pages/commonStyles/Styles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { PeopleSectionPropsType } from 'types/components/commonTypes/PeopleSectionTypes/PeopleSectionTypes';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

export const PeopleSection: FC<PeopleSectionPropsType> = ({
  peopleList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledSection>
    <StyledSectionTitleContainer>
      <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    </StyledSectionTitleContainer>
    <StyledSectionContent>
      {peopleList.map((human: PeopleType) => (
        <PeopleCard
          key={human.id}
          name={human.name}
          profilePath={human.profile_path}
          popularity={human.popularity}
        />
      ))}
    </StyledSectionContent>
  </StyledSection>
);
