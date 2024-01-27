import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";
import Login from "./components/Login";
import Alert from "./components/Alert";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesConfig />
      <ToastProvider>
        <Alert/>
        <Login/>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
