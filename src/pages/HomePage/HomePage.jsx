// src/pages/HomePage/HomePage.jsx

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <ContactPhoneIcon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
      <Typography variant="h3" component="h1" gutterBottom>
        Kişi Rehberi
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Kişilerinizi güvenle saklayın ve her yerden erişin.
      </Typography>
    </Box>
  );
}
