import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

/**
 * PrivateRoute
 * - Eğer kullanıcı giriş YAPMAMIŞSA (ve şu an bilgileri yenilenmiyorsa), giriş sayfasına atar.
 * - Giriş yapmışsa, istenen gizli bileşeni gösterir.
 */
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  // Kullanıcı bilgisi çekilirken yönlendirme yapma, bekle
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
