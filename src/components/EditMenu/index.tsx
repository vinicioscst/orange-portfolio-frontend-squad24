import { Edit } from "@mui/icons-material"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react";

function EditMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                id="edit-button"
                aria-controls={open ? 'edit-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    width: '28px',
                    height: '28px'
                }}
            >
                <Edit sx={{ fontSize: "18px" }} />
            </IconButton>
            <Menu
                id="edit-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'edit-button',
                }}
            >
                <MenuItem onClick={handleClose}>Editar</MenuItem>
                <MenuItem onClick={handleClose}>Excluir</MenuItem>
            </Menu>
        </>
    )
}

export default EditMenu