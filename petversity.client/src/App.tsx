import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Container } from "@mui/material";
import AuthView from "./features/auth/AuthView";
import PrivateRoute from "./layout/PrivateRoute";
import PetsView from "./features/pets/PetsView";

const App: React.FC = () => {
  return (
    <>
      <Container
        component="main"
        maxWidth={false}
        sx={{ height: "100vh", px: "0 !important" }}
      >
        <Router>
          <Routes>
            <Route index element={<Navigate to="/pets" />} />
            <Route path="/login" element={<AuthView />} />

            <Route element={<PrivateRoute />}>
              <Route path="pets" element={<PetsView />} />
            </Route>

            <Route path="*" element={<Navigate to="login" />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default App;
