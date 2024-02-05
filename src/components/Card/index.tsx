import { Avatar, CardActions, CardContent, CardMedia, Chip, Card as MuiCard, Typography, useTheme } from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useContext } from 'react';
import EditMenu from '../EditMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectWithoutImage from '../../assets/project-without-image.svg'
import { UserContext } from '../../context/UserContext/UserContext';

type CardProps = {
    id: number;
    image: string | undefined | null;
    title: React.ReactNode;
    date: React.ReactNode;
    alt: string;
    avatar: string | undefined;
    tags: string[] | null;
    handleEdit?: () => void;
    handleDelete?: (projectId: number) => void;
}

function Card({ id, image, title, date, alt, avatar, tags, handleDelete, handleEdit }: CardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const {handleDetailProject} = useContext(UserContext)

    return (
        <MuiCard
            elevation={0}
            sx={{
                width: '100%',
                position: "relative",
            }}
        >
            {handleEdit && handleDelete ? (
                <CardActions
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                >
                    <EditMenu
                        projectId={id}
                        handleDelete={() => handleDelete(id)}
                        handleEdit={handleEdit}
                    />
                </CardActions>
            ) : null}
            <CardMedia
                sx={{
                    height: 258,
                    width: '100%',
                    borderRadius: "0.25rem",
                    cursor: "pointer"
                }}
                onClick={() => handleDetailProject(id)}
                image={image !== null && image !== undefined && image.trim() !== "" ? image : ProjectWithoutImage}
            />

            <CardContent sx={{padding: '0', paddingTop: '0.5rem'}}>
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
                            ml={'0.5rem'}
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
                                    marginLeft: '0.5rem',
                                    marginRight: '0.5rem'
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
                    <Grid sx={{ display: 'flex', gap: '0.5rem' }}>
                        {tags && tags.map((item) => (
                            <Chip label={item} key={item} />
                        )).slice(0, 2)}
                    </Grid>
                </Grid>
            </CardContent>
        </MuiCard>
    )
}

export default Card
