import { instance } from 'api/instance';

export const SearchAPI = {
  getSearchSectionImage() {
    return instance.get('movie/popular');
  },
};
