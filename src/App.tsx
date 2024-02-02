import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";
import { ToastProvider } from "./context/ToastContext";
import UserProvider, { UserContext } from "./context/UserContext/UserContext";
import Alert from "./components/Alert";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";


function App() {
  const { loading } = useContext(UserContext);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GoogleOAuthProvider
          clientId={googleClientId}
        >
          <UserProvider>
            {loading ? "" : <RoutesConfig />}
            <Alert />
          </UserProvider>
        </GoogleOAuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
