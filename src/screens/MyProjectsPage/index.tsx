import { Avatar, Box, Card as MUICard,Grid, Typography, useMediaQuery, useTheme, CardContent } from "@mui/material";
import FilterIcon from '@mui/icons-material/Filter';
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container } from "../../components/Container";
import Button from "../../components/Button";
import dados from "../DiscoverPage/dados.ts";
import Card from "../../components/Card";
import { useContext, useState } from "react";
import AddProjectModal from "../../components/AddProjectModal/index.tsx";
import { UserContext } from "../../context/UserContext/UserContext.tsx";

function MyProjectsPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  const [isModalOpen, setIsModalOpen] = useState(false)

  const {user} = useContext(UserContext)

  function handleAddProject() {
    setIsModalOpen(true)
    console.log('projeto adicionado')
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
            <Avatar src={user?.image} sx={{ width: 122, height: 122}}/>
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
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <MUICard onClick={handleAddProject} sx={{
            width: '389px',
            height: '258px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E6E9F2',
            borderRadius: '4px',
            marginTop: '40px',
            marginBottom: '40px',
            cursor: 'pointer'
          }}
          >
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <FilterIcon fontSize="large" sx={{ color: 'black', width: 46, height: 46}}/>
              <Typography fontSize="1rem" variant="subtitle1" color={"GrayText"}>Adicione seu primeiro projeto</Typography>
              <Typography fontSize="0.875rem" variant="subtitle1" color={"GrayText"}>Compartilhe seu talento com milhares de pessoas</Typography>
            </CardContent>
          </MUICard>
        )}
        <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Container>
    </>
  );
}

export default MyProjectsPage;
