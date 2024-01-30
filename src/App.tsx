import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";
import { ToastProvider } from "./context/ToastContext";
import UserProvider from "./context/UserContext/UserContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <UserProvider>
          <RoutesConfig />
          <Alert />
        </UserProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
