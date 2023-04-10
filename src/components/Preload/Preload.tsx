import { Navigate } from 'react-router-dom';
import { getAuthData } from '../../redux/store/authData/authDataSlice';
import { useAppSelector } from '../../redux/store/hooks';
import routes from '../../routes';

const Preload = ({
  children,
}: {
  children: null | JSX.Element;
}): null | JSX.Element => {
  const authData = useAppSelector(getAuthData);
  const { isLoggedIn } = authData;

  if (!isLoggedIn) {
    return <Navigate to={routes.login} />;
  } else {
    return children;
  }
};

export default Preload;
