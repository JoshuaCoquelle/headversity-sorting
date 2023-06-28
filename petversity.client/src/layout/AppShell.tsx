import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/auth.slice";
import petversityLogo from "../assets/petversity.png";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ mb: 6, mx: "auto" }}
        color="default"
        elevation={0}
        variant="outlined"
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            mx: "auto",
            width: "100%",
          }}
        >
          <Box mr="auto">
            <img
              src={petversityLogo}
              className="h-8 mr-3"
              style={{ maxWidth: 200 }}
              alt="Petversity logo"
            />
          </Box>

          <Button color="primary" variant="contained" onClick={logoutUser}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {children}
      </Container>
    </Box>
  );
};

export default AppShell;
