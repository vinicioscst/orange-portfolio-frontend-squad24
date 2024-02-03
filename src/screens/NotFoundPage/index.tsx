import { Box, Grid, Typography, useTheme } from "@mui/material"
import NotFound from "../../assets/notFound.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

type Props = {}

function NotFoundPage({ }: Props) {
    const theme = useTheme()
    return (
        <Box
            sx={{
                background: 'linear-gradient(to top, #444466, #222244)',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}
        >
            <Grid
                container
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid>
                    <Typography
                        variant="h2"
                        color={theme.palette.neutral[70]}
                    >
                        Ooops...
                    </Typography>
                </Grid>
                <Grid>
                    <img
                        src={NotFound}
                        alt="Desenho de dois discos voadores iluminando o número 4, com uma lua entre eles, formando a mensagem 404"
                        style={{
                            width: '25rem',
                            height: '25rem'
                        }} />
                </Grid>
                <Grid mb="2rem">
                    <Typography
                        variant="h5"
                        color={theme.palette.neutral[70]}
                        textAlign="center"
                    >A página que você requisitou não foi encontrada
                    </Typography>
                </Grid>
                <Grid>
                    <Link to={'/my-projects'}>
                        <Button
                            text="Voltar para Home"
                            type="button"
                            variant="primaryContained"
                            onClick={() => { }}
                        />
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NotFoundPage