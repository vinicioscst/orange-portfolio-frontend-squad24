import { Avatar, Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import FilterIcon from '@mui/icons-material/Filter';
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container } from "../../components/Container";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useContext, useState } from "react";
import AddProjectModal from "../../components/AddProjectModal/index.tsx";
import { UserContext } from "../../context/UserContext/UserContext.tsx";

function MyProjectsPage() {
  const theme = useTheme();
  const isBetweenTabletAndMobile = useMediaQuery(theme.breakpoints.down(448));

  const [inputSearch, setInputSearch] = useState<string>("");
  const { user, isAddProjectModalOpen, setIsAddProjectModalOpen, handleDeleteProject } = useContext(UserContext)

  const filteredProjects = user?.projects.filter((project) => project.tags?.toUpperCase().includes(inputSearch.toUpperCase()));

  function handleAddProject() {
    setIsAddProjectModalOpen(true)
  }

  function handleEdit() {
    console.log('edit')
  }

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            padding: isBetweenTabletAndMobile ? "3.5rem 1rem 2.5rem" : "7rem 1rem 3.5rem",
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: isBetweenTabletAndMobile ? "column" : "row",
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: isBetweenTabletAndMobile ? "1rem" : "2.625rem"
            }}
          >
            <Avatar src={user?.profileimage !== null ? user?.profileimage : undefined} alt={user?.fullname} sx={{ width: 122, height: 122 }} />
            <Box>
              <Typography variant="h6" component="div" gutterBottom>
                {user?.fullname}
              </Typography>
              <Typography variant="subtitle1" component="div" gutterBottom>
                Brasil
              </Typography>
              <Button text="Adicionar Projeto" variant="primaryContained" type="button" onClick={handleAddProject}></Button>
            </Box>
          </Box>
        </Box>
        <Typography mb={2} color={"GrayText"} fontWeight={'bold'}>Meus projetos</Typography>
        <Input type="text" variant="outlined" label="Buscar tags" onChange={(e) => setInputSearch(e.target.value)} />
        {user?.projects[0].id !== null ? (
          <Grid container spacing={2} sx={{ marginTop: "40px", marginBottom: "77px" }}>
            {filteredProjects?.map((project) => {
              const fullDate: Date = new Date(project.createddate)
              let year: number | string = fullDate.getFullYear() % 100
              let month: number | string = fullDate.getMonth() + 1

              if (month < 10) {
                month = '0' + month;
              }
              if (year < 10) {
                year = '0' + year;
              }

              const formattedDate = `${month}/${year}`;
              return (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card
                    id={project.id}
                    title={project.title}
                    tags={project.tags !== null ? project.tags.split(", ") : null}
                    image={project.image}
                    date={formattedDate}
                    avatar={user?.profileimage !== null ? user?.profileimage : undefined}
                    alt={project.title}
                    handleDelete={() => handleDeleteProject(project.id)}
                    handleEdit={handleEdit}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box onClick={handleAddProject} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: '4px',
            marginTop: '40px',
            marginBottom: '40px',
            cursor: 'pointer'
          }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <FilterIcon fontSize="large" sx={{ color: 'black', width: 46, height: 46 }} />
              <Typography fontSize="1rem" variant="subtitle1" color={"GrayText"}>Adicione seu primeiro projeto</Typography>
              <Typography fontSize="0.875rem" variant="subtitle1" color={"GrayText"}>Compartilhe seu talento com milhares de pessoas</Typography>
            </Box>
          </Box>
        )}
        <AddProjectModal isOpen={isAddProjectModalOpen} onClose={() => setIsAddProjectModalOpen(false)} />
      </Container>
    </>
  );
}

export default MyProjectsPage;
