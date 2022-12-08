import { NullableType } from 'types/common/nullableType';

export type CastCardPropsType = {
  name: string;

  secondString?: string;
  photoPath?: NullableType<string>;
};
