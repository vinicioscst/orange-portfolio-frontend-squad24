import {
  Box,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Illustration from "../../assets/loginpage-illustration.svg";
import LoginForm from "../../components/LoginForm";

function LoginPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className="flex justify-center items-stretch w-full max-w-screen-xl px-5 md:px-0 mx-auto">
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
          color={theme.palette.primary[90]}
          sx={{ textAlign: "center" }}
        >
          Entre no Orange Portfólio
        </Typography>
        <Box>
          
          <LoginForm />
        </Box>
      </Box>
    </section>
  );
}

export default LoginPage;
