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
import { useState } from "react";

function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ display: smallScreen ? "inline-flex" : "none" }}
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
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
          Nome
          <Typography variant="caption">seuemail@mail.com</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>Meus Projetos</MenuItem>
        <MenuItem>Descobrir</MenuItem>
        <Divider />
        <MenuItem
          sx={{
            display: "flex",
            gap: "0.75rem",
          }}
        >
          <Logout />
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}

export default MobileMenu;