import {
  Box,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FormRegister from "../../components/RegisterForm";
import Illustration from "../../assets/registerpage-illustration.svg";

function RegisterPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className="flex justify-center items-stretch w-full max-w-screen-xl px-5 md:px-0 mx-auto">
      <CardMedia
        component="img"
        image={Illustration}
        alt="Ilustração de uma moça sentada em uma cadeira. Na sua frente há uma mesa com um notebook e, acima dele, um balão de diálogo com um ícone de programação. Há decorações no chão e na mesa e o fundo da ilustração é branco com triângulos coloridos posicionados aleatoriamente."
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
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          color={theme.palette.primary[90]}
        >
          Cadastre-se
        </Typography>
        <FormRegister />
      </Box>
    </section>
  );
}

export default RegisterPage;
