import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardMedia,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { Notifications } from "@mui/icons-material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MobileMenu from "../MobileMenu";
import Logo from "../../assets/logo.svg";
import { Link as Navigation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext";

function Header() {
  const theme = useTheme();
  const [colorMode, toggleColorMode] = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumSize = useMediaQuery(theme.breakpoints.down("md"));
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.between("xs", 294));
  const { user, userLogout } = useContext(UserContext)

  return (
    <AppBar
      position="static"
      sx={{ width: "100%" }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          padding: '0 8px 0 8px',
          margin: 'auto'

        }}
      >
        <Toolbar
          sx={{
            padding: "0.75rem 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: isExtraSmallSize ? "center" : "space-between",
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
              <Navigation to={"/my-projects"}>
                <Typography
                  variant="h6"
                  sx={{ "&:hover": { textDecoration: "underline" } }}
                >
                  Meus Projetos
                </Typography>
              </Navigation>
              <Navigation to={"/discover"}>
                <Typography
                  variant="h6"
                  sx={{ "&:hover": { textDecoration: "underline" } }}
                >
                  Descobrir
                </Typography>
              </Navigation>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Avatar sx={{ width: 40, height: 40 }} src={user?.profileimage !== null ? user?.profileimage : undefined} alt={user?.fullname} />
            <IconButton
              onClick={toggleColorMode}
              sx={{
                backgroundColor:
                  colorMode === 'dark' ? theme.palette.neutral[70] : theme.palette.primary.main,
                color: colorMode === 'dark' ? theme.palette.neutral[120] : theme.palette.neutral.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary[80],
                },
              }}
            >
              {colorMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <Button
              variant="text"
              sx={{ display: isMobile ? "none" : "flex" }}
              onClick={() => userLogout()}
            >
              Sair
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
