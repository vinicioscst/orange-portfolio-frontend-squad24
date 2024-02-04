import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Container } from "../../components/Container";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext.tsx";

function DiscoverPage() {
  const [inputSearch, setInputSearch] = useState<string>("");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  const { getProjects, allProjects, user } = useContext(UserContext)

  const otherProjects = allProjects.filter(project => project.userid !== user?.userid)
  const filteredProjects = otherProjects.filter((project) => project.tags.toUpperCase().includes(inputSearch.toUpperCase()));

  useEffect(() => {
    getProjects()
  }, [])

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
        <Input type="text" variant="outlined" label="Buscar tags" onChange={(e) => setInputSearch(e.target.value)} />
        {allProjects.length > 0 ? (
          <Grid container spacing={2} sx={{ marginTop: "40px", marginBottom: "77px" }}>
            {filteredProjects.map((project) => {
              const date = new Date(project.createddate);
              const formattedDate = `${date.getMonth() + 1}/${date
                .getFullYear()
                .toString()
                .slice(-2)}`;
              return (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card
                    id={project.id}
                    title={project.title}
                    tags={project.tags.split(", ")}
                    image={project.image || undefined}
                    date={formattedDate}
                    avatar={project.user.profileImage}
                    alt={project.title}
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
