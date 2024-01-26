import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardMedia,
  IconButton,
  Link,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import MobileMenu from "../MobileMenu";
import Logo from "../../assets/logo.svg";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      sx={{
        position: "static",
      }}
    >
      <Toolbar
        sx={{
          padding: "0.75rem 1.5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomLeftRadius: "0.25rem",
          borderBottomRightRadius: "0.25rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MobileMenu />
          <CardMedia
            component="img"
            image={Logo}
            alt="Logo da Orange Portfólio. Possui uma figura de uma laranja ilustrada, junto com o nome da aplicação em caixa alta. O 'Orange' está na cor branca e o 'Portfólio' na cor laranja"
            sx={{ maxHeight: "2rem", width: "auto" }}
          />
          <Box
            sx={{
              gap: "1.5rem",
              marginLeft: isMediumSize ? "1.5rem" : "5.75rem",
              display: isMobile ? "none" : "flex",
            }}
          >
            <Link
              variant="h6"
              underline="hover"
              href="#"
              color={theme.palette.neutral.main}
            >
              Meus Projetos
            </Link>
            <Link
              variant="h6"
              underline="hover"
              href="#"
              color={theme.palette.neutral.main}
            >
              Descobrir
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Avatar sx={{ width: 40, height: 40 }} />
          <IconButton>
            <Notifications sx={{ color: theme.palette.neutral.main }} />
          </IconButton>
          <Button sx={{ color: theme.palette.neutral.main, display: isMobile ? "none" : "flex" }}>
            Sair
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
