import { DAY, MOVIE, TV, WEEK } from 'constants/common';

export type MovieFilterType = typeof TV | typeof MOVIE;
export type TimeFilterType = typeof DAY | typeof WEEK;
