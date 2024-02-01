import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Container } from "../../components/Container";
import Input from "../../components/Input";
import dados from "./dados.ts";
import Card from "../../components/Card";

function DiscoverPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            width: "100%",
            paddingY: "7rem",
            paddingX: isDesktop ? "6rem" : "14.75rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2.125rem",
              fontWeight: "400",
              lineHeight: "2.125rem",
              letterSpacing: "0.25px",
            }}
            color="InfoText"
            align="center"
            m={"auto"}
          >
            Junte-se à comunidade de inovação, inspiração e descobertas,
            transformando experiências em conexões inesquecíveis
          </Typography>
        </Box>
        <Input type="text" variant="outlined" label="Buscar tags" />
        {dados.length > 0 ? (
          <Grid container spacing={2} sx={{ marginTop: "40px", marginBottom: "77px" }}>
            {dados.map((dado) => {
              const date = new Date(dado.createddate);
              const formattedDate = `${date.getMonth() + 1}/${date
                .getFullYear()
                .toString()
                .slice(-2)}`;
              return (
                <Grid item xs={12} sm={6} md={4} key={dado.id}>
                  <Card
                    title={dado.title}
                    tags={dado.tags.split(", ")}
                    image={dado.image || undefined}
                    date={formattedDate}
                    avatar={dado.userid.toString()}
                    alt={dado.title}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography>Nenhum projeto adicionado ainda</Typography>
        )}
      </Container>
    </>
  );
}

export default DiscoverPage;
