import { Avatar, Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import FilterIcon from '@mui/icons-material/Filter';
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container } from "../../components/Container";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useContext, useEffect, useState } from "react";
import AddProjectModal from "../../components/AddProjectModal/index.tsx";
import { UserContext } from "../../context/UserContext/UserContext.tsx";
import ConfirmationModal from "../../components/ConfirmationModal/index.tsx";
import SuccessModal from "../../components/FeedbackModal/Success/index.tsx";
import { useToast } from "../../context/ToastContext.tsx";
import { useColorMode } from "../../style/ColorMode/ColorModeCoxtext.tsx";
import ModalProjectAdded from "../../components/ModalProjectAdded/index.tsx";
import DrawerProjectAdded from "../../components/DrawerProjectAdded/index.tsx";

function MyProjectsPage() {
  const theme = useTheme();
  const [colorMode] = useColorMode();
  const isBetweenTabletAndMobile = useMediaQuery(theme.breakpoints.down(448));
  const { displayToast } = useToast()
  const [inputSearch, setInputSearch] = useState<string>("");
  const {
    user, isAddProjectModalOpen,
    setIsAddProjectModalOpen,
    setIsConfirmationModalOpen, setSelectedProjectId, getProjects } = useContext(UserContext)

  useEffect(() => {
    getProjects()
  }, [])

  const filteredProjects = user?.projects.filter((project) => project.tags?.toUpperCase().includes(inputSearch.toUpperCase()));

  function handleAddProject() {
    setIsAddProjectModalOpen(true)
  }

  function handleDelete(projectId: number) {
    setIsConfirmationModalOpen(true)
    setSelectedProjectId(projectId)
  }

  function onCancel() {
    setIsConfirmationModalOpen(false)
  }

  function handleEdit() {
    displayToast({
      message: "",
      severity: "info",
      title: "Funcionalidade a ser implementada",
      variant: "filled",
      isLoading: false,
    });
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
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                color={theme.palette.neutral[120]}
              >
                {user?.fullname}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                color={theme.palette.neutral[130]}
              >
                {user?.email}
              </Typography>
              <Button text="Adicionar Projeto" variant="primaryContained" type="button" onClick={handleAddProject}></Button>
            </Box>
          </Box>
        </Box>
        <Typography
          mb={2}
          color={theme.palette.neutral[120]}
          fontWeight={'bold'}
        >Meus projetos
        </Typography>
        <Input
          type="text"
          variant="outlined"
          label="Buscar por tags"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        {user?.projects[0].id !== null ? (
          <Grid container spacing={2} rowSpacing={4} sx={{ marginTop: "2.5rem", marginBottom: "4.8125rem" }}>
            {filteredProjects?.map((project) => {
              const date: Date = new Date(project.createddate)
              const month = (date.getMonth() + 1).toString().padStart(2, '0');
              const formattedDate = `${month}/${date.getFullYear().toString().slice(-2)}`
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
                  <ConfirmationModal
                    onCancel={onCancel}
                    onClose={onCancel}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            borderRadius: '0.25rem',
            paddingY: '2.5rem',
            gap: "1.5rem"
          }}
          >
            <Box onClick={handleAddProject} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: "100%",
              maxWidth: "24.3125rem",
              gap: '1rem',
              backgroundColor: colorMode === 'dark' ? theme.palette.neutral[80] : theme.palette.neutral[70],
              padding: "4.25rem 3.75rem",
              borderRadius: "0.25rem",
              cursor: 'pointer',
              flexBasis: "12.5rem",
              flexGrow: 1
            }}>
              <FilterIcon fontSize="large" sx={{ color: 'black', width: 46, height: 46 }} />
              <Typography fontSize="1rem" variant="subtitle1" color={colorMode === 'dark' ? theme.palette.neutral.main : theme.palette.neutral[120]}>Adicione seu primeiro projeto</Typography>
              <Typography fontSize="0.875rem" variant="subtitle1" color={colorMode === 'dark' ? theme.palette.neutral.main : theme.palette.neutral[120]}>Compartilhe seu talento com milhares de pessoas</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: "100%",
              maxWidth: "24.3125rem",
              height: isBetweenTabletAndMobile ? "18.1875rem" : "auto",
              gap: '1rem',
              backgroundColor: colorMode === 'dark' ? theme.palette.neutral[80] : theme.palette.neutral[70],
              opacity: 0.2,
              padding: "4.25rem 3.75rem",
              borderRadius: "0.25rem",
              flexBasis: "12.5rem",
              flexGrow: 1
            }}>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: "100%",
              maxWidth: "24.3125rem",
              height: isBetweenTabletAndMobile ? "18.1875rem" : "auto",
              gap: '1rem',
              backgroundColor: colorMode === 'dark' ? theme.palette.neutral[80] : theme.palette.neutral[70],
              opacity: 0.2,
              padding: "4.25rem 3.75rem",
              borderRadius: "0.25rem",
              flexBasis: "12.5rem",
              flexGrow: 1
            }}>
            </Box>
          </Box>
        )}
        <AddProjectModal isOpen={isAddProjectModalOpen} onClose={() => setIsAddProjectModalOpen(false)} />
        <SuccessModal />
        {isBetweenTabletAndMobile ? <DrawerProjectAdded /> : <ModalProjectAdded />}
      </Container>
    </>
  );
}

export default MyProjectsPage;
