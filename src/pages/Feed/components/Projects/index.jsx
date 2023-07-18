import { Share, Favorite } from '@mui/icons-material';
import {
  Box, Button, CardContent, CardMedia, Divider, Grid, IconButton, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getProjectsRequest } from 'src/services/requests';

import { CardActionsCustom, CardCustom } from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await getProjectsRequest();
    return response.data; // supondo que o objeto de dados seja retornado em response.data
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await getProjects();
      setProjects(projectData);
      console.log(projectData);
    };

    fetchData();
  }, []);

  return (
    <Grid container width={600} gap={4}>
      {
        projects.map((project) => (
          <Grid key={project.id} item xs={12}>
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
                  <Typography gutterBottom variant="body2" component="h3" color="text.secondary">
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
                <Box>
                  <Button size="small" color="secondary">Juntar-se</Button>
                  <Button size="small" color="secondary">Leia mais</Button>
                </Box>
                <Box>
                  <IconButton aria-label="add to favorites">
                    <Share />
                  </IconButton>
                  <IconButton aria-label="share">
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
