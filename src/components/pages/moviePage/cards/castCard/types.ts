import { NullableType } from 'types/common/nullableType';

export type CastCardPropsType = {
  character: string;
  name: string;

  profile_path?: NullableType<string>;
};
