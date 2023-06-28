import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuthState } from "../features/auth/auth.slice";
import AppShell from "./AppShell";

const PrivateRoute: React.FC = () => {
  const auth = useAppSelector(selectAuthState);

  if (!auth.user.id) {
    return <Navigate to="login" replace />;
  }

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
};

export default PrivateRoute;
