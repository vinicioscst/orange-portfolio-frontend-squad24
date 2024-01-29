import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";
import { ToastProvider } from "./context/ToastContext";
import UserProvider from "./context/UserContext/UserContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ToastProvider>
          <RoutesConfig />
        </ToastProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
