import { AppBar, Avatar, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Menu, Notifications } from "@mui/icons-material";
import Logo from "../../assets/logo.svg"

function Header() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      sx={{
        padding: "0.75rem 1.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: "0.25rem",
        borderBottomRightRadius: "0.25rem"
      }}
    >
      <div className="flex items-center gap-2">
        <IconButton sx={{display: smallScreen ? "inline-flex" : "none"}}>
          <Menu />
        </IconButton>
        <img
          src={Logo}
          alt="Logo da Orange Portfólio. Possui uma figura de uma laranja ilustrada, junto com o nome da aplicação em caixa alta. O 'Orange' está na cor branca e o 'Portfólio' na cor laranja"
          className="h-8"
          draggable={false}
        />
        <div className="sm:flex gap-6 ml-[5.75rem] hidden">
          <h6>Meus Projetos</h6>
          <h6>Descobrir</h6>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar sx={{ width: 40, height: 40 }} />
        <IconButton>
          <Notifications />
        </IconButton>
      </div>
    </AppBar>
  );
}

export default Header;
