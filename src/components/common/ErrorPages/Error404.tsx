import { NavLink } from 'react-router-dom';

import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Error404 = (): ReturnComponentType => (
  <div>
    <div>Error 404</div>
    <div>
      <NavLink to={PATH.MAIN}>Back to home</NavLink>
    </div>
  </div>
);
