import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar"; // Bir sonraki adımda oluşturacağız
import Box from "@mui/material/Box";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Üst Menü */}
      <AppBar />

      {/* Sayfa İçerikleri */}
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
