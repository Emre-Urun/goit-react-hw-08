import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
        Hoşgeldin, {user.name}
      </Typography>
      <Button
        variant="contained"
        color="error"
        size="small"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(logout())}
        sx={{ textTransform: "none" }}
      >
        Çıkış
      </Button>
    </Box>
  );
};
