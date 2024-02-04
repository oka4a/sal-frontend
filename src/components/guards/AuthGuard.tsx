import { Navigate, Outlet } from "react-router-dom";
import { hasLocalStorageToken } from "../../utils/localStorageToken";

const AuthGuard = () => {
  // const navigate = useNavigate();
  const isLogged = hasLocalStorageToken();
  
  if (!isLogged) {
    return <Navigate to="/login" replace/>;
  }

  return <Outlet />;
};
export default AuthGuard;
