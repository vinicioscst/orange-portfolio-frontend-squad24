import { ThemeProvider } from "@mui/material/styles"
import theme from "./style/globalStyle"
import { Typography } from "@mui/material"

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Typography variant="h1">
        Roboto
      </Typography>
      <Typography variant="h6">
        Hello world!!
      </Typography>
      <Typography variant="h3">
        Hello world!!
      </Typography>
    </ThemeProvider>
  )
}

export default App
