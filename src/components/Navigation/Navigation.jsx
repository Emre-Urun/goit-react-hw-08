import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box component="nav">
      <Button
        component={NavLink}
        to="/"
        sx={{ color: "white", marginRight: 2 }}
      >
        Ana Sayfa
      </Button>

      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" sx={{ color: "white" }}>
          Kişilerim
        </Button>
      )}
    </Box>
  );
};
