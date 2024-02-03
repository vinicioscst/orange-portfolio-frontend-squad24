import { Box, Grid, Typography } from "@mui/material"
import { Container } from "../../components/Container"
import NotFound from "../../assets/notFound.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

type Props = {}

function NotFoundPage({ }: Props) {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to top, #444466, #222244)',
                height: '100vh'
            }}
        >
            <Grid>
                <Typography>
                    Ooops...
                </Typography>
                <Typography>Algo deu errado...</Typography>
                <img src={NotFound} />
                <Typography>A página que você requisitou não foi encontrada.</Typography>
                <Link to={'/my-projects'}>
                    <Button
                        text="Voltar para Home"
                        type="button"
                        variant="primaryContained"
                        onClick={() => { }}
                    />
                </Link>
            </Grid>

        </Box>
    )
}

export default NotFoundPage