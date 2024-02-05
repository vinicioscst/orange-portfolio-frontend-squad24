import { Avatar, Box, Chip, Grid, IconButton, Link, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import ProjectWithoutImage from "../../assets/project-without-image.svg";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext";

function ModalProjectAdded() {
    const theme = useTheme();
    const [colorMode] = useColorMode();
    const isSmall = useMediaQuery(theme.breakpoints.down("lg"))
    const { openedProjectData, setOpenedProjectData } = useContext(UserContext);
    const date: Date = new Date(
        openedProjectData?.project?.createddate as string
    );
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${month}/${date.getFullYear().toString().slice(-2)}`;

    function handleClose() {
        setOpenedProjectData({
            project: null,
            open: false,
        });
    }

    return (
        <Modal
            open={
                openedProjectData?.project !== null &&
                    openedProjectData?.project !== undefined
                    ? openedProjectData?.open
                    : false
            }
            onClose={handleClose}
        >
            <Box
                sx={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 24,
                    width: isSmall ? '43.75rem' : '64rem',
                    maxWidth: '64rem',
                    borderRadius: '10px',
                    backgroundColor: colorMode === 'dark' ? theme.palette.primary[100] : theme.palette.neutral.main,
                    padding: isSmall ? '2rem 5rem' : '3rem 6rem',
                }}
            >
                <Grid container>
                    <Grid
                        sx={{
                            position: "absolute",
                            top: 24,
                            right: 24,

                        }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                height: 24,
                                width: 24,
                                backgroundColor: colorMode === 'dark' ? theme.palette.primary[100] : theme.palette.neutral.main,
                                color: theme.palette.neutral[130],

                                '&:hover': {
                                    color: theme.palette.neutral[130],
                                    backgroundColor: theme.palette.neutral[70]
                                }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2rem"
                >
                    <Grid
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Avatar
                            src={openedProjectData?.project?.user.profileImage}
                            alt={openedProjectData?.project?.user.fullname}
                            sx={{
                                width: '2.5rem',
                                height: '2.5rem'
                            }}
                        />
                        <Grid ml="0.5rem">
                            <Typography
                                variant="subtitle1"
                                color={theme.palette.neutral[120]}
                                fontWeight="bold"
                            > {openedProjectData?.project?.user.fullname}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={theme.palette.neutral[110]}
                            >{formattedDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="h5"
                            color={theme.palette.neutral[120]}
                            textAlign="center"
                        >{openedProjectData?.project?.title}
                        </Typography>
                    </Grid>
                    <Grid display="flex" gap="0.5rem">
                        {openedProjectData?.project?.tags &&
                            openedProjectData?.project?.tags
                                .split(", ")
                                .map((tag) => <Chip label={tag} key={tag} />)
                                .slice(0, 2)}
                    </Grid>
                </Grid>
                <Grid>
                    <img
                        src={
                            openedProjectData?.project?.image !== null &&
                                openedProjectData?.project?.image !== undefined &&
                                openedProjectData?.project.image.trim() !== ""
                                ? openedProjectData?.project?.image
                                : ProjectWithoutImage
                        }
                        alt={openedProjectData?.project?.title}
                        style={{
                            width: isSmall ? '40rem' : '50rem',
                            height: isSmall ? '20rem' : '30rem',
                            borderRadius: '0.25rem'
                        }}
                    />
                </Grid>
                <Grid mt={isSmall ? "2rem" : "4rem"}>
                    <Typography
                        variant="body1"
                        color={theme.palette.neutral[120]}
                    >
                        {openedProjectData?.project?.description}
                    </Typography>
                    <Grid mt="2rem">
                        <Typography
                            variant="subtitle1"
                            color={theme.palette.neutral[120]}
                        >Veja o projeto completo:
                        </Typography>
                        <Link
                            variant="body2"
                            color={theme.palette.info[80]}
                            underline="hover"
                            href={openedProjectData?.project?.link}
                        >{openedProjectData?.project?.link}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default ModalProjectAdded