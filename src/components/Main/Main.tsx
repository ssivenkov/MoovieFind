import style from './Main.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Main = (): ReturnComponentType => (
  <div className={style.container}>Main</div>
);
