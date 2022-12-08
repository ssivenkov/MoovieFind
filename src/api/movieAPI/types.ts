import { CastType, CrewType } from 'store/moviePageStore/types';

export type CastResponseType = {
  id: number;
  cast: CastType[];
  crew: CrewType[];
};
