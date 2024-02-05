import RoutesConfig from "./routes/RoutesConfig";
import { ToastProvider } from "./context/ToastContext";
import UserProvider, { UserContext } from "./context/UserContext/UserContext";
import Alert from "./components/Alert";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";
import ColorModeProvider from "./style/ColorMode/ColorModeCoxtext";
import { GlobalStylesProvider } from "./style";


function App() {
  const { loading } = useContext(UserContext);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  return (
    <ColorModeProvider>
      <GlobalStylesProvider>
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
      </GlobalStylesProvider>
    </ColorModeProvider>

  );
}

export default App;
