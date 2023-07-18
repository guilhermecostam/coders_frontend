import { Favorite, GitHub, Share } from '@mui/icons-material';
import {
  Box, Button, CardContent, CardMedia, Divider, Grid, IconButton, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Discord from 'src/components/Icons/Discord';
import { getProjectRequest } from 'src/services/requests';

import { CardActionsCustom, CardCustom } from './styles';

export default function ProjectIndividual() {
  const projectId = useParams();
  const [project, setProject] = useState({});

  const getProject = async () => {
    const response = await getProjectRequest(projectId);

    return response.data; // supondo que o objeto de dados seja retornado em response.data
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await getProject();
      setProject(projectData);
    };

    fetchData();
  }, []);

  return (
    <Grid container width={600} gap={4}>
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
          <Box display="flex" gap={1.5} />
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
  );
}
