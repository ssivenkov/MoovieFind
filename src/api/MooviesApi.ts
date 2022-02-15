import { instance } from 'api/instance';
import { TempRequestObjType } from 'components/RoutesContainer/RoutesContainer';

export const MooviesAPI = {
  getPopularMoovies(tempRequestObj: TempRequestObjType) {
    return instance.get(`movie/now_playing`, { params: tempRequestObj });
  },
};
