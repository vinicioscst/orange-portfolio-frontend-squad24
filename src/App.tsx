import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <RoutesConfig />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
