import { Avatar, CardActions, CardContent, CardMedia, Chip, Card as MuiCard, Typography, useTheme } from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import EditMenu from '../EditMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

type CardProps = {
    image: string | undefined;
    title: React.ReactNode;
    date: React.ReactNode;
    alt: string;
    avatar: string;
    tags: string[];
    handleEdit?: () => void;
    handleDelete?: () => void;
}

function Card({ image, title, date, alt, avatar, tags, handleDelete = () => {}, handleEdit = () => {} }: CardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <MuiCard
            elevation={0}
            sx={{
                width: '100%',
                position: "relative",
            }}
        >
            <CardActions
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,

                }}
            >
                <EditMenu
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            </CardActions>
            <CardMedia
                sx={{
                    height: 258,
                    width: '100%',
                    borderRadius: "4px"
                }}
                image={image}
            />

            <CardContent sx={{padding: '0', paddingTop: '8px'}}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    gap={1}
                >
                    <Grid
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Avatar
                            alt={alt}
                            src={avatar}
                            sx={{
                                width: isMobile ? 40 : 24,
                                height: isMobile ? 40 : 24
                            }}
                        />
                        <Grid
                            ml={'8px'}
                            display="flex"
                            flexDirection={isMobile ? "column" : "row"}
                        >
                            <Typography
                                variant='subtitle1'
                                color={theme.palette.neutral[120]}
                            >{title}
                            </Typography>
                            {isMobile ?
                                null :
                                <Typography sx={{
                                    marginLeft: '8px',
                                    marginRight: '8px'
                                }}
                                >•
                                </Typography>
                            }
                            <Typography
                                variant='subtitle1'
                                color={theme.palette.neutral[110]}
                            >{date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        {tags.map((item) => (
                            <Chip label={item} sx={{ marginRight: '12px' }} />
                        )).slice(0, 2)}
                    </Grid>
                </Grid>
            </CardContent>
        </MuiCard>
    )
}

export default Card