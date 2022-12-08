import { HumanCard } from 'components/common/card/HumanCard/HumanCard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles';
import { observer } from 'mobx-react-lite';
import { PersonType } from 'store/peopleStore/types';
import { ComponentType } from 'types/common/componentType';

import { PeopleSectionPropsType } from './types';

export const PeopleSection = observer((props: PeopleSectionPropsType): ComponentType => {
  const { peopleList, sectionTitle } = props;

  return (
    <StyledSection>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <StyledSectionContent>
        {peopleList.map((person: PersonType) => (
          <HumanCard
            key={person.id}
            name={person.name}
            popularity={person.popularity}
            profilePath={person.profile_path}
          />
        ))}
      </StyledSectionContent>
    </StyledSection>
  );
});
