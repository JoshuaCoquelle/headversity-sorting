import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "./auth.action";
import { selectAuthState } from "./auth.slice";
import { getPets } from "../pets/pets.action";
import type { UserLogin } from "./auth.types";
import petversityLogo from "../../assets/petversity.png";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { success: loginSuccess } = useAppSelector(selectAuthState);

  const [formState, setFormState] = useState<UserLogin>({
    email: "admin@petversity.com",
    password: "secret",
  });

  useEffect(() => {
    if (loginSuccess) {
      navigate("/pets");
      dispatch(getPets());
    }
  }, [navigate, dispatch, loginSuccess]);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formState));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box pt={20} display="flex" flexDirection="column" alignItems="center">
        <Box maxWidth="260px" mb={5}>
          <img src={petversityLogo} style={{ width: "100%" }} />
        </Box>

        <Typography component="p" width="100%" marginBottom={1}>
          Sign in with seed account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            id="email"
            label="Email Address"
            name="email"
            defaultValue="admin@petversity.com"
            autoComplete="email"
            size="small"
            margin="normal"
            required
            fullWidth
            disabled
            InputProps={{ readOnly: true }}
            onChange={handleChange}
          />

          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            defaultValue="secret"
            autoComplete="password"
            size="small"
            margin="normal"
            disabled
            required
            fullWidth
            InputProps={{ readOnly: true }}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>

          <Typography component="p" variant="caption" align="center" color="">
            account creation disabled
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
