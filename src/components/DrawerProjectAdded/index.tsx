import { Avatar, Box, Chip, Drawer, Grid, IconButton, Link, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import ProjectWithoutImage from "../../assets/project-without-image.svg";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext";

function DrawerProjectAdded() {
    const theme = useTheme();
    const [colorMode] = useColorMode();
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
        <Drawer
            anchor="bottom"
            open={
                openedProjectData?.project !== null &&
                    openedProjectData?.project !== undefined
                    ? openedProjectData?.open
                    : false
            }
            onClose={handleClose}
            ModalProps={{
                sx: {
                    '.MuiPaper-elevation': {
                        backgroundColor: 'transparent',
                        overflow: 'visible'
                    }
                }
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    backgroundColor: colorMode === 'dark' ? theme.palette.primary[100] : theme.palette.neutral.main,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                }}
            >
                <Grid container padding={'1.5rem'} flexDirection="column">
                    <Grid
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,

                        }}>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                height: 24,
                                width: 24,
                                backgroundColor: colorMode === 'dark' ? theme.palette.primary[100] : theme.palette.neutral.main,
                                color: theme.palette.neutral[130],

                                '&:hover': {
                                    backgroundColor: theme.palette.neutral[70]
                                }
                            }}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="h5"
                            color={theme.palette.neutral[120]}
                            sx={{
                                margin: '3.5rem 0 2rem 0',
                                textAlign: 'center'
                            }}
                        >{openedProjectData?.project?.title}
                        </Typography>
                    </Grid>
                    <Grid maxWidth={312} maxHeight={258}>
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
                                width: '19.5rem',
                                height: '16.125rem',
                                borderRadius: '0.25rem'
                            }} />
                    </Grid>
                    <Grid
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        marginTop="1rem"
                    >
                        <Grid
                            display="flex"
                            flexDirection="row"
                            alignItems="center">
                            <Avatar
                                src={openedProjectData?.project?.user.profileImage}
                                alt={openedProjectData?.project?.user.fullname}
                                sx={{
                                    width: '2.5rem',
                                    height: '2.5rem'
                                }}
                            />
                            <Grid display="flex" flexDirection="column" ml="0.5rem">
                                <Typography
                                    variant="subtitle1"
                                    fontWeight='bold'
                                    color={theme.palette.neutral[120]}
                                >{openedProjectData?.project?.user.fullname}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color={theme.palette.neutral[110]}
                                >{formattedDate}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid display="flex" gap="0.5rem" >
                            {openedProjectData?.project?.tags &&
                                openedProjectData?.project?.tags
                                    .split(", ")
                                    .map((tag) => <Chip label={tag} key={tag} />)
                                    .slice(0, 2)}
                        </Grid>
                    </Grid>
                    <Grid mt="1.5rem">
                        <Typography
                            variant="body1"
                            color={theme.palette.neutral[120]}
                        >
                            {openedProjectData?.project?.description}
                        </Typography>
                    </Grid>
                    <Grid mt="2rem">
                        <Typography
                            variant="body1"
                            color={theme.palette.neutral[120]}
                        >Veja o projeto completo:
                        </Typography>
                        <Link
                            color={theme.palette.info[80]}
                            underline="hover"
                            href={openedProjectData?.project?.link}
                        >{openedProjectData?.project?.link}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
    );
}

export default DrawerProjectAdded