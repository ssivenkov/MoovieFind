import {
  GenreType,
  ProductionCompanyType,
  SpokenLanguageType,
} from 'store/moviePageStore/types';

type IncludeNameType = GenreType | SpokenLanguageType | ProductionCompanyType;

export const formatByNameHelper = (items: IncludeNameType[]): string => {
  const namesArray = items.map((item: IncludeNameType) => item.name);

  return namesArray.join(', ');
};
