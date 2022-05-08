export type RequestObjectType = {
  // eslint-disable-next-line camelcase
  api_key: string;
  language: string;
  page: number;
};

export type SmallRequestObjectType = Pick<RequestObjectType, 'api_key' | 'language'>;

export type APIKeyRequestObjectType = {
  // eslint-disable-next-line camelcase
  api_key: string;
};
