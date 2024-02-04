import { Modal, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import Button from "../Button"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from "react";

type ConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: (projectId: number) => void;
    onCancel: () => void;
    projectId: number;
}

function ConfirmationModal({ isOpen, onClose, onDelete, onCancel, projectId }: ConfirmationModalProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    function handleClose() {
        setOpen(false);
        if (onClose) {
            onClose()
        }
        if (onCancel) {
            onCancel()
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid
                container
                width={isMobile ? '312px' : '421px'}
                spacing={isMobile ? 3 : 4}
                padding={isMobile ? 3 : 5}
                display="flex"
                flexDirection="column"
                bgcolor={theme.palette.neutral.main}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 24,
                }}
            >
                <Grid container spacing={3}>
                    <Grid>
                        <Typography
                            variant="h5"
                            color={theme.palette.neutral[110]}
                        >Deseja Excluir?
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="body1"
                            color={theme.palette.neutral[110]}
                        >Se você prosseguir irá excluir o projeto do seu portfólio
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid>
                        <Button
                            type="button"
                            onClick={() => onDelete(projectId)}
                            variant="primaryContained"
                            text="EXCLUIR" />
                    </Grid>
                    <Grid>
                        <Button
                            type="button"
                            onClick={onCancel}
                            variant="secondaryContained"
                            text="CANCELAR" />
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default ConfirmationModal