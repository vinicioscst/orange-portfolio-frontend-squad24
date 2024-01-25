import { ThemeProvider } from "@mui/material/styles"
import theme from "./style/globalStyle"
import { Typography } from "@mui/material"
import MobileMenu from "./components/MobileMenu"

function App() {

  return (

    <ThemeProvider theme={theme}>
      <MobileMenu />
    </ThemeProvider>
  )
}

export default App
