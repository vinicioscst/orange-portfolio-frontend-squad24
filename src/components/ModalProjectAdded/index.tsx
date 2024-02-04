import { Avatar, Box, Chip, Grid, IconButton, Link, Modal, Typography, useMediaQuery, useTheme } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

type ProjectAddedProps = {
    title: React.ReactNode;
    altImage: string;
    image: string;
    avatar: string;
    altAvatar: string;
    subtitle: React.ReactNode;
    date: React.ReactNode;
    description: React.ReactNode;
    tags: string[];
    link: string;
    onClick: () => void;
    open: boolean;
    onClose: () => void;
}

function ModalProjectAdded({
    title, altImage, image,
    avatar, subtitle, date,
    description, tags, link,
    altAvatar, onClick, open,
    onClose }: ProjectAddedProps) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("lg"))

    return (
        <Modal
            open={open}
            onClose={onClose}
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
                    backgroundColor: theme.palette.neutral.main,
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
                            onClick={onClick}
                            sx={{
                                height: 24,
                                width: 24,
                                backgroundColor: theme.palette.neutral.main,
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
                            src={avatar}
                            alt={altAvatar}
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
                            >{subtitle}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={theme.palette.neutral[110]}
                            >{date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography
                            variant="h5"
                            color={theme.palette.neutral[120]}
                            textAlign="center"
                        >{title}
                        </Typography>
                    </Grid>
                    <Grid display="flex" gap="0.5rem">
                        {tags.map((item) => (
                            <Chip label={item} />
                        )).slice(0, 2)}
                    </Grid>
                </Grid>
                <Grid>
                    <img
                        src={image}
                        alt={altImage}
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
                        {description}
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
                            href={link}
                        >{link}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default ModalProjectAdded