import { Edit } from "@mui/icons-material"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react";

type MenuProps = {
    handleEdit: () => void;
    handleDelete: () => void;
    projectId: number;
    onClose: () => void;
}
function EditMenu({ handleEdit, handleDelete, onClose }: MenuProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        if (onClose) {
            onClose()
        }
        if (handleDelete) {
            handleDelete()
        }
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
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    'aria-labelledby': 'edit-button',
                }}
            >
                <MenuItem onClick={handleEdit} sx={{
                    paddingRight: '4rem'
                }}>Editar</MenuItem>
                <MenuItem onClick={handleDelete}>Excluir</MenuItem>
            </Menu>
        </>
    )
}

export default EditMenu