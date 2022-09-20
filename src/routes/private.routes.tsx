import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const PrivateRoutesApp = () => {
  const isSectionActive: any = () => {
    const isLoggedIn: string | null = localStorage.getItem('@gamaServiceToken');

    if (isLoggedIn === null || isLoggedIn == '') {
      return false;

    } else {
      const onlyToken = isLoggedIn;
      const tokenPayload: any = jwt_decode(onlyToken);
      const expSeconds = tokenPayload.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true;
    }
  }

  return (
    isSectionActive() ? <Outlet /> : <Navigate to='/signin' />
  );
}

export default PrivateRoutesApp;