import { Link } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { ComponentType } from 'types/common/componentType';

export const Error404Page = (): ComponentType => (
  <div>
    <div>Error 404</div>
    <div>
      <Link to={PATH.MAIN_PAGE}>Back to home</Link>
    </div>
  </div>
);
