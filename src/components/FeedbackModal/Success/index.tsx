import { Grid, Modal, Typography, useMediaQuery, useTheme } from "@mui/material"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Link } from "react-router-dom";
import Button from "../../Button";

type SuccessModalProps = {
    title: string;
    open: boolean;
    onClose: () => void;
}

function SuccessModal({ title, open, onClose }: SuccessModalProps) {
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
                        >{title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <CheckCircleRoundedIcon
                            sx={{
                                width: '50px',
                                height: '50px',
                                color: theme.palette.success.main
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

export default SuccessModal
