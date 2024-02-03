import { Logout, Menu as MenuIcon } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isOpen = Boolean(anchorEl);

  const { user, userLogout } = useContext(UserContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{
          display: smallScreen ? "inline-flex" : "none",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.neutral.main,
          "&:hover": {
            backgroundColor: theme.palette.primary[80],
          },
        }}
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon htmlColor="white" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {user?.user.fullname}
          <Typography
            variant="body2"
            color={theme.palette.common.black}
            sx={{ opacity: "0.6" }}
          >
            {user?.user.email}
          </Typography>
        </MenuItem>
        <Divider />
        <Link to={"/my-projects"}>
          <MenuItem>Meus Projetos</MenuItem>
        </Link>
        <Link to={"/discover"}>
          <MenuItem>Descobrir</MenuItem>
        </Link>
        <Divider sx={{ marginY: "0.5rem" }} />
        <MenuItem
          sx={{
            display: "flex",
            gap: "0.75rem",
          }}
          onClick={() => userLogout()}
        >
          <Logout sx={{ opacity: "0.56" }} />
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}

export default MobileMenu;
