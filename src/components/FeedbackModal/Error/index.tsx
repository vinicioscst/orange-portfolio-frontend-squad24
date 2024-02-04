import { Grid, Modal, Typography, useMediaQuery, useTheme } from "@mui/material"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Button from "../../Button";
import { Link } from "react-router-dom";

type ErrorModalProps = {
    open: boolean;
    onClose: () => void;
}
function ErrorModal({ open, onClose }: ErrorModalProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Modal open={open} onClose={onClose}>
            <Grid
                container
                width={isMobile ? '19.5rem' : '21.9375rem'}
                spacing={isMobile ? 3 : 4}
                padding={isMobile ? 3 : 5}
                display="flex"
                flexDirection="column"
                zIndex={1}
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
                    gap={4}
                    alignItems="center"
                >
                    <Grid>
                        <Typography
                            textAlign="center"
                            variant="h5"
                            color={theme.palette.neutral[110]}
                        >Algo deu errado! Tente novamente.
                        </Typography>
                    </Grid>
                    <Grid>
                        <CancelRoundedIcon
                            sx={{
                                width: '3.125rem',
                                height: '3.125rem',
                                color: theme.palette.error.main
                            }} />
                    </Grid>
                    <Grid>
                        <Link to="/my-projects">
                            <Button
                                text="Voltar para projetos"
                                type="button"
                                variant="primaryContained"
                                onClick={() => { }}
                            />
                        </Link>

                    </Grid>
                </Grid>
            </Grid>
        </Modal>

    )
}

export default ErrorModal