import { Avatar, Box, Chip, Grid, IconButton, Link, SwipeableDrawer, Typography, useTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

type DrawerProps = {
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
    onOpen: () => void;
}

function DrawerProjectAdded({
    title, altImage, image,
    avatar, subtitle, date,
    description, tags, link,
    altAvatar, onClick, open,
    onClose, onOpen }: DrawerProps) {
    const theme = useTheme();

    return (
        <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            ModalProps={{
                sx: {
                    '.MuiPaper-elevation': {
                        backgroundColor: 'transparent',
                    }
                }
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    backgroundColor: theme.palette.neutral.main,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                }}
            >
                <Grid container padding={'24px'} flexDirection="column">
                    <Grid
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,

                        }}>
                        <IconButton
                            onClick={onClick}
                            sx={{
                                height: 24,
                                width: 24,
                                backgroundColor: theme.palette.neutral.main,
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
                        >{title}
                        </Typography>
                    </Grid>
                    <Grid maxWidth={312} maxHeight={258}>
                        <img
                            src={image}
                            alt={altImage}
                            style={{
                                width: '312px',
                                height: '258px',
                                borderRadius: '4px'
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
                                src={avatar}
                                alt={altAvatar}
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
                                >{subtitle}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color={theme.palette.neutral[110]}
                                >{date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid display="flex" gap="8px" >
                            {tags.map((item) => (
                                <Chip label={item} />
                            )).slice(0, 2)}
                        </Grid>
                    </Grid>
                    <Grid mt="1.5rem">
                        <Typography
                            variant="body1"
                            color={theme.palette.neutral[120]}
                        >
                            {description}
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
                            href={link}
                        >{link}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </SwipeableDrawer>
    );
}

export default DrawerProjectAdded