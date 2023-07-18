import { Share, Favorite } from '@mui/icons-material';
import {
  Box, Button, CardContent, CardMedia, Divider, Grid, IconButton, Typography,
} from '@mui/material';
import React from 'react';

import { CardActionsCustom, CardCustom } from './styles';

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: 'E-commerce com Next JS',
      description: 'A ideia é criar um e-commerce para um loja de E-Sports de CS:GO. O projeto será desenvolvido com Next JS, Typescript, Styled Components, Storybook, Jest, React Testing Library e Strapi CMS.',
      githubUrl: '#',
      ownerId: 0,
      discordUrl: '#',
      dateCreation: '2021-05-01T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 1,
      name: 'Blog Pessoal com Gatsby',
      description: 'Crie um blog pessoal usando Gatsby, uma ferramenta de desenvolvimento web baseada em React. Explore recursos como Markdown para escrever posts e implemente um sistema de tags para organizar o conteúdo.',
      githubUrl: '#',
      ownerId: 1,
      discordUrl: '#',
      dateCreation: '2022-01-15T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 2,
      name: 'Aplicativo de Tarefas com Vue.js',
      description: 'Desenvolva um aplicativo de tarefas simples usando Vue.js. Utilize recursos como componentes reutilizáveis, roteamento e armazenamento local para criar uma experiência de lista de tarefas interativa e responsiva.',
      githubUrl: '#',
      ownerId: 2,
      discordUrl: '#',
      dateCreation: '2022-03-10T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 3,
      name: 'Rede Social com Firebase e React Native',
      description: 'Crie uma aplicação de rede social móvel usando React Native e integre-a ao Firebase para autenticação de usuários, armazenamento de dados e recursos em tempo real, como curtidas e comentários. Desenvolva uma interface intuitiva e atraente.',
      githubUrl: '#',
      ownerId: 3,
      discordUrl: '#',
      dateCreation: '2022-05-20T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 4,
      name: 'Plataforma de Cursos Online com Django',
      description: 'Crie uma plataforma de cursos online utilizando Django, um framework Python. Implemente recursos como autenticação de usuários, gerenciamento de cursos e pagamentos. Desenvolva um painel administrativo para gerenciar o conteúdo.',
      githubUrl: '#',
      ownerId: 4,
      discordUrl: '#',
      dateCreation: '2022-07-05T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 5,
      name: 'Aplicativo de Clima com React e API externa',
      description: 'Desenvolva um aplicativo de previsão do tempo usando React. Integre-se a uma API externa para obter dados de clima em tempo real. Crie uma interface visual atraente para exibir as informações meteorológicas.',
      githubUrl: '#',
      ownerId: 5,
      discordUrl: '#',
      dateCreation: '2022-09-18T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 6,
      name: 'Jogo de Quiz com Angular',
      description: 'Crie um jogo de quiz interativo usando Angular. Implemente recursos como seleção de respostas, pontuação e temporizador. Desenvolva uma interface atraente e responsiva para oferecer uma experiência de jogo envolvente.',
      githubUrl: '#',
      ownerId: 6,
      discordUrl: '#',
      dateCreation: '2022-11-02T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 7,
      name: 'Aplicativo de Receitas com Flutter',
      description: 'Desenvolva um aplicativo de receitas utilizando Flutter, um framework para desenvolvimento móvel multiplataforma. Crie uma interface atraente com recursos como pesquisa de receitas, favoritos e instruções passo a passo.',
      githubUrl: '#',
      ownerId: 7,
      discordUrl: '#',
      dateCreation: '2023-01-10T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
    {
      id: 8,
      name: 'Aplicativo de Finanças Pessoais com React Native e Redux',
      description: 'Crie um aplicativo de finanças pessoais utilizando React Native e Redux para gerenciamento de estado. Desenvolva recursos como rastreamento de despesas, categorização, visualização de gráficos e definição de metas financeiras.',
      githubUrl: '#',
      ownerId: 8,
      discordUrl: '#',
      dateCreation: '2023-03-25T00:00:00.000Z',
      isDeleted: false,
      thumbnail: 'https://picsum.photos/400/300',
    },
  ];

  const owners = [
    {
      id: 0,
      name: 'João',
      description: 'Desenvolvedor Full Stack',
    },
    {
      id: 1,
      name: 'Maria',
      description: 'Desenvolvedora Front-end',
    },
    {
      id: 2,
      name: 'Pedro',
      description: 'CEO da Insec',
    },
    {
      id: 3,
      name: 'Ana',
      description: 'Desenvolvedora Full Stack',
    },
    {
      id: 4,
      name: 'Luiza',
      description: 'Desenvolvedora Front-end',
    },
    {
      id: 5,
      name: 'Lucas',
      description: 'UI/UX Designer',
    },
    {
      id: 6,
      name: 'Mariana',
      description: 'Desenvolvedora Back-end',
    },
    {
      id: 7,
      name: 'Carlos',
      description: 'Tech Lead Front-end na Doppler',
    },
    {
      id: 8,
      name: 'Isabela',
      description: 'Tech Recruiter',
    },
  ];

  const convertDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  return (
    <Grid container width={600} gap={4}>
      {
        projects.map((project) => (
          <Grid key={project.id} item xs={12}>
            <CardCustom>
              <CardMedia
                sx={{ height: 300 }}
                image={project.thumbnail}
                title="Project thumbnail"
              />
              <CardContent>
                <Box display="flex" gap={0.5} mb={1}>
                  <Typography gutterBottom variant="body2" component="h2">
                    {owners[project.ownerId].name}
                    ,
                  </Typography>
                  <Typography gutterBottom variant="body2" component="h3" color="text.secondary">
                    {owners[project.ownerId].description}
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
                  {`Criado em ${convertDate(project.dateCreation)}`}
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
