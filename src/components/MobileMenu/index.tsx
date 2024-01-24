import { Logout } from "@mui/icons-material";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";

interface MobileMenuProps {
  anchorEl?: null | HTMLElement;
  handleClose?: () => void;
}

function MobileMenu({ anchorEl, handleClose }: MobileMenuProps) {
  const isOpen = Boolean(anchorEl);

  return (
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
  );
}

export default MobileMenu;
