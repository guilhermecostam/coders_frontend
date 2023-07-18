import { Share, Favorite, GitHub } from '@mui/icons-material';
import {
  Box, Button, CardContent, CardMedia, Divider, Grid, IconButton, Modal, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Discord from 'src/components/Icons/Discord';
import { getProjectCollaboratorsRequest, getProjectsRequest } from 'src/services/requests';

import { CardActionsCustom, CardCustom } from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [setCollaborators] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getProjects = async () => {
    const response = await getProjectsRequest();

    return response.data;
  };

  const getCollaborators = async () => {
    const response = await getProjectCollaboratorsRequest();

    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await getProjects();
      const collaboratorData = await getCollaborators();

      setProjects(projectData);
      setCollaborators(collaboratorData);
    };

    fetchData();
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };

  return (
    <Grid container width={600} gap={4}>
      <Box>
        <Typography color="text.secondary" variant="h6" component="h1">
          Esses são todos os projetos que você é dono ou faz parte.
        </Typography>
      </Box>

      {
        projects.map((project) => (
          <Grid key={project.id} item xs={12}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" color="text.secondary">
                  {project.name}
                </Typography>
                <Typography id="modal-modal-description" mt={2} color="text.secondary">
                  {project.description}
                </Typography>
              </Box>
            </Modal>
            <CardCustom>
              <CardMedia
                sx={{ height: 300 }}
                image="https://picsum.photos/400/300"
                title="Project thumbnail"
              />
              <CardContent>
                <Box display="flex" gap={0.5} mb={1}>
                  <Typography gutterBottom variant="body2" component="h2">
                    {/* {owners[project.ownerId].name} */}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="h3">
                    {/* {owners[project.ownerId].description} */}
                  </Typography>
                </Box>

                <Typography gutterBottom variant="body1" component="h4">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Divider sx={{ mt: 5, mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {/* {`Criado em ${convertDate(project.dateCreation)}`} */}
                </Typography>
              </CardContent>
              <CardActionsCustom>
                <Box display="flex" gap={1.5}>
                  <Button size="small" variant="outlined" color="secondary" onClick={() => handleOpen()}>Detalhes</Button>
                </Box>
                <Box>
                  {
                    project.discordUrl && (
                    <IconButton aria-label="discord">
                      <Link to={project.discordUrl}>
                        <Discord />
                      </Link>
                    </IconButton>
                    )
                  }
                  {
                    project.githubUrl && (
                    <IconButton aria-label="github">
                      <Link to={project.githubUrl}>
                        <GitHub />
                      </Link>
                    </IconButton>
                    )
                  }
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                  <IconButton aria-label="favorite">
                    <Favorite />
                  </IconButton>
                </Box>
              </CardActionsCustom>
            </CardCustom>
          </Grid>
        ))
      }
    </Grid>
  );
}
