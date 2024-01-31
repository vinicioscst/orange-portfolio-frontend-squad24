import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";
import { ToastProvider } from "./context/ToastContext";
import UserProvider from "./context/UserContext/UserContext";
import Alert from "./components/Alert";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENTID}`}>
          <UserProvider>
            <RoutesConfig />
            <Alert />
          </UserProvider>
        </GoogleOAuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
