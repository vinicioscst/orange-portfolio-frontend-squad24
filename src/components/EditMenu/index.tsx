import { Edit } from "@mui/icons-material"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react";

type MenuProps = {
    handleEdit: () => void;
    handleDelete: (projectId: number) => void;
    projectId: number;
}
function EditMenu({ handleEdit, handleDelete, projectId }: MenuProps) {
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
                    width: '1.75rem',
                    height: '1.75rem'
                }}
            >
                <Edit sx={{ fontSize: "1.125rem" }} />
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
                <MenuItem onClick={() => handleDelete(projectId)}>Excluir</MenuItem>
            </Menu>
        </>
    )
}

export default EditMenu