import { PeopleCard } from 'components/common/card/PeopleCard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { PersonType } from 'store/reducers/peopleReducer/types';
import { ComponentType } from 'types/common/componentType';

import { PeopleSectionPropsType } from './types';

export const PeopleSection = (props: PeopleSectionPropsType): ComponentType => {
  const { peopleList, sectionTitle } = props;

  return (
    <StyledSection>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <StyledSectionContent>
        {peopleList.map((person: PersonType) => (
          <PeopleCard
            key={person.id}
            name={person.name}
            popularity={person.popularity}
            profilePath={person.profile_path}
          />
        ))}
      </StyledSectionContent>
    </StyledSection>
  );
};
