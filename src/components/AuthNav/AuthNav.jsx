import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const AuthNav = () => {
  return (
    <Box>
      <Button
        component={NavLink}
        to="/register"
        variant="outlined"
        color="inherit"
        sx={{ marginRight: 1 }}
      >
        Kayıt Ol
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        color="secondary"
      >
        Giriş Yap
      </Button>
    </Box>
  );
};
