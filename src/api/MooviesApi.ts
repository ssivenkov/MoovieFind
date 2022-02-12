import { instance } from 'api/instance';
import { TempObjType } from 'components/RoutesContainer/RoutesContainer';

export const MooviesAPI = {
  getPopularMoovies(tempObj: TempObjType) {
    return instance.get(`movie/550`, { params: tempObj });
  },
};
