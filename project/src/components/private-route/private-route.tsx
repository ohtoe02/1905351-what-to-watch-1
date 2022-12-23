import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../utils/constants';

type PrivateRouteProps = {
  children: JSX.Element;
  hasAccess: string;
};

function PrivateRoute({ children, hasAccess }: PrivateRouteProps): JSX.Element {
  return hasAccess === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
