import {
  Box,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Illustration from "../../assets/loginpage-illustration.svg";
import LoginForm from "../../components/LoginForm";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext";

function LoginPage() {
  const theme = useTheme();
  const [colorMode] = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        backgroundColor: colorMode === 'dark' ? theme.palette.primary.main : theme.palette.neutral.main
      }}
    >
      <CardMedia
        component="img"
        image={Illustration}
        alt="Ilustração de monitor de computador com wireframes de interfaces na tela e elementos de estilização. Em cima dele e a sua frente, há miniaturas de pessoas com e um lápis e gravuras de paisagem e filmadora. O fundo da imagem é com linhas e formas abstratas, além de plantas e elementos associados a criatividade e arte"
        sx={{
          maxHeight: "100dvh",
          width: "42.8vw",
          objectFit: "cover",
          display: isMediumSize ? "none" : "block",
          objectPosition: "left",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          width: isMediumSize ? "100vw" : "57.2vw",
          minHeight: "100dvh",
          padding: isMediumSize ? "0" : "0 1rem",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          color={colorMode === 'dark' ? theme.palette.neutral[120] : theme.palette.primary[90]}
          sx={{ textAlign: "center" }}
        >
          Entre no Orange Portfólio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
            maxWidth: "32.3125rem",
            paddingY: "1rem",
          }}
        >
          <Box sx={{ alignSelf: "center", paddingBottom: "1rem" }}>
            <GoogleLoginButton />
          </Box>
          <LoginForm />
          <Link to={"/register"}>
            <Typography variant="subtitle1" color={theme.palette.info[70]}>
              Cadastre-se
            </Typography>
          </Link>
        </Box>
      </Box>
    </Grid>

  );
}

export default LoginPage;
