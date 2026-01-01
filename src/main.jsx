import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { store, persistor } from "./redux/store";
import App from "./components/App";
import { Toaster } from "react-hot-toast"; // Bildirimler için
import CssBaseline from "@mui/material/CssBaseline"; // Tarayıcı CSS sıfırlama (MUI)
import "@fontsource/roboto/300.css"; // MUI Fontları
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <CssBaseline /> {/* Global CSS Reset */}
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
