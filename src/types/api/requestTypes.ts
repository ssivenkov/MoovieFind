export type FullRequestType = {
  api_key: string;
  language: string;
  page: number;
};

export type LanguageRequestType = Pick<FullRequestType, 'api_key' | 'language'>;

export type APIKeyRequestType = Pick<FullRequestType, 'api_key'>;
