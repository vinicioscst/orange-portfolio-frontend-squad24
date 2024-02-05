import { Grid, Modal, Typography, useMediaQuery, useTheme } from "@mui/material"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Button from "../../Button";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserContext";

function SuccessModal() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const {setModalData, modalData} = useContext(UserContext)

    function handleClose() {
        setModalData({
            title: "",
            open: false
        })
    }

    return (
        <Modal open={modalData !== null && modalData !== undefined ? modalData.open : false} onClose={handleClose}>
            <Grid
                container
                maxWidth= {isMobile ? "19.5rem" : '21.9375rem'}
                padding="2rem 1rem"
                display="flex"
                flexDirection="column"
                alignItems="center"
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
                    gap="1.5rem"
                    alignItems="center"
                >
                    <Grid>
                        <Typography
                            textAlign="center"
                            variant="h5"
                            color={theme.palette.neutral[110]}
                        >{modalData?.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <CheckCircleRoundedIcon
                            sx={{
                                width: '3.125rem',
                                height: '3.125rem',
                                color: theme.palette.success.main
                            }} />
                    </Grid>
                    <Grid>
                        <Button
                            text="Voltar para projetos"
                            type="button"
                            variant="primaryContained"
                            onClick={handleClose}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}

export default SuccessModal
