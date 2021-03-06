import { Link } from 'react-router-dom';

import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const Error404Page = (): ReturnComponentType => (
  <div>
    <div>Error 404</div>
    <div>
      <Link to={PATH.MAIN}>Back to home</Link>
    </div>
  </div>
);
