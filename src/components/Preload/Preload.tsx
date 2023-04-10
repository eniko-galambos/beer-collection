import { getAuthData } from '../../redux/store/authData/authDataSlice';
import { useAppSelector } from '../../redux/store/hooks';

const Preload = ({
  children,
}: {
  children: null | JSX.Element;
}): null | JSX.Element => {
  const authData = useAppSelector(getAuthData);
  const { isLoggedIn } = authData;

  if (!isLoggedIn) {
    return null;
  } else {
    return children;
  }
};

export default Preload;
