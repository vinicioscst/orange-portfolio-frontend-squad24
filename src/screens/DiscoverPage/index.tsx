import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Container } from "../../components/Container";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext.tsx";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext.tsx";
import DrawerProjectAdded from "../../components/DrawerProjectAdded/index.tsx";
import ModalProjectAdded from "../../components/ModalProjectAdded/index.tsx";

function DiscoverPage() {
  const [inputSearch, setInputSearch] = useState<string>("");
  const theme = useTheme();
  const [colorMode] = useColorMode();
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  const isBetweenTabletAndMobile = useMediaQuery(theme.breakpoints.down(448));

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
              letterSpacing: "0.015622rem",
            }}
            color={colorMode === 'dark' ? theme.palette.primary[70] : theme.palette.primary.main}
            align="center"
            m={"auto"}
          >
            Junte-se à comunidade de inovação, inspiração e descobertas,
            transformando experiências em conexões inesquecíveis
          </Typography>
        </Box>
        <Input type="text" variant="outlined" label="Buscar tags" onChange={(e) => setInputSearch(e.target.value)} />
        {allProjects.length > 0 ? (
          <Grid container spacing={2} rowSpacing={4} sx={{ marginTop: "2.5rem", marginBottom: "4.8125rem" }}>
            {filteredProjects.map((project) => {
              const date: Date = new Date(project.createddate);
              const month = (date.getMonth() + 1).toString().padStart(2, '0');
              const formattedDate = `${month}/${date.getFullYear().toString().slice(-2)}`
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
          <Box sx={{ padding: "3rem 1rem", margin: "0 auto" }}>
            <Typography
              color={colorMode === 'dark' ? theme.palette.primary[70] : theme.palette.primary.main}
              sx={{ textAlign: "center" }}
            >Nenhum projeto adicionado ainda
            </Typography>
          </Box>
        )}
        {isBetweenTabletAndMobile ? <DrawerProjectAdded /> : <ModalProjectAdded />}
      </Container>
    </>
  );
}

export default DiscoverPage;
