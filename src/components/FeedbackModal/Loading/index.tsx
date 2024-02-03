import { CircularProgress, Grid, Modal, useMediaQuery, useTheme } from "@mui/material"

type LoadingModalProps = {
    open: boolean;
    onClose: () => void;
}
function LoadingModal({ open, onClose }: LoadingModalProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Modal open={open} onClose={onClose}>
            <Grid
                container
                width={isMobile ? '312px' : '351px'}
                spacing={isMobile ? 3 : 4}
                padding={isMobile ? 3 : 5}
                display="flex"
                zIndex={1}
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
                <Grid
                    container
                    display="flex"
                    flexDirection="column"
                    padding={8}
                    alignItems="center"
                >
                    <Grid>
                        <CircularProgress
                            sx={{
                                width: '50px',
                                height: '50px',
                                color: theme.palette.secondary.main
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Modal>

    )
}

export default LoadingModal