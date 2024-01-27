import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/globalStyle";
import RoutesConfig from "./routes/RoutesConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesConfig />
    </ThemeProvider>
  );
}

export default App;
