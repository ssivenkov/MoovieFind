import { FC } from 'react';

import styled from 'styled-components';

import { PeopleCard } from 'components/common/Card/PeopleCard';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { PeopleSectionPropsType } from 'types/components/commonTypes/PeopleSectionTypes/PeopleSectionTypes';
import { PeopleType } from 'types/reducers/peopleReducerTypes';

const StyledPeopleSection = styled.div`
  width: var(--content-width);
`;

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 25px 0;
  font-size: 40px;
  font-weight: 500;
`;

const StyledPeople = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    & {
      justify-content: center;
    }
  }
`;

export const PeopleSection: FC<PeopleSectionPropsType> = ({
  peopleList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledPeopleSection>
    <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    <StyledPeople>
      {peopleList.map((human: PeopleType) => (
        <PeopleCard
          key={human.id}
          name={human.name}
          profile_path={human.profile_path}
          popularity={human.popularity}
        />
      ))}
    </StyledPeople>
  </StyledPeopleSection>
);
