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
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  const [inputSearch, setInputSearch] = useState<string>("");
  const {user, isAddProjectModalOpen, setIsAddProjectModalOpen} = useContext(UserContext)

  const filteredProjects = user?.projects.filter((project) => project.tags?.toUpperCase().includes(inputSearch.toUpperCase()));

  function handleAddProject() {
    setIsAddProjectModalOpen(true)
  }

  function handleEdit() {
    console.log('edit')
  }

  function handleDelete() {
    console.log('delete')
  }

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            paddingY: "7rem",
            paddingX: isDesktop ? "6rem" : "14.75rem",
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: isDesktop ? "column" : "row",
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: '2.625rem'
            }}
          >
            <Avatar src={user?.profileimage !== null ? user?.profileimage : undefined} alt={user?.fullname} sx={{ width: 122, height: 122}}/>
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
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box onClick={handleAddProject} sx={{
            width: '389px',
            height: '258px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
              <FilterIcon fontSize="large" sx={{ color: 'black', width: 46, height: 46}}/>
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
