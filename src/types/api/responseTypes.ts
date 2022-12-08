import { AxiosResponse } from 'axios';

export type AxiosPagesDataType<R> = {
  page: number;
  results: R;
  total_pages: number;
  total_results: number;
};

export type AxiosPagesResponse<R> = AxiosResponse<AxiosPagesDataType<R>>;
