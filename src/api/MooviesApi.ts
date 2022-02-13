import { instance } from 'api/instance';
import { TempObjType } from 'components/RoutesContainer/RoutesContainer';

export const MooviesAPI = {
  getPopularMoovies(tempObj: TempObjType) {
    return instance.get(`movie/now_playing`, { params: tempObj });
  },
};
