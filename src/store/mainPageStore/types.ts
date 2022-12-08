import { DAY, MOVIE, TV, WEEK } from 'constants/common';

import { FullRequestType } from 'types/api/requestTypes';

export type ContentFilterType = typeof TV | typeof MOVIE;
export type TimeFilterType = typeof DAY | typeof WEEK;

export type GetTrendingContentParamsType = {
  tempRequestObject: FullRequestType;
  timeWindow: TimeFilterType;
};
