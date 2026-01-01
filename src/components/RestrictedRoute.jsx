import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

/**
 * RestrictedRoute
 * - Eğer kullanıcı giriş yapmışsa (isLoggedIn: true), 'redirectTo' adresine yönlendirir.
 * - Değilse, istenen bileşeni (Component) gösterir.
 */
export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
