import { styled } from '@mui/material';

export const Bar = styled('span')(({ theme }) => ({
  backgroundImage: theme.palette.gradient.main,
  width: '100%',
  height: '4px',
}));

export const H1 = styled('h1')(({ theme }) => ({
  backgroundImage: theme.palette.gradient.main,
  color: 'transparent',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',

  fontSize: '6rem',
  fontWeight: 900,
}));

export const H2 = styled('h2')(({ theme }) => ({
  backgroundImage: theme.palette.gradient.main,
  color: 'transparent',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',

  fontSize: '2rem',
  fontWeight: 700,
}));

export const Main = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 456,
}));

export const CTA = styled('button')(({ theme }) => ({
  backgroundImage: theme.palette.gradient.main,
  color: 'transparent',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',

  width: 'fit-content',
  fontSize: '1.5rem',
  fontWeight: 500,
  borderImage: `${theme.palette.gradient.main} 1`,
  transition: '0.5s',

  padding: '1rem 1.875rem',
  marginTop: '1.5rem',

  '&:hover': {
    boxShadow: 'inset 1000px 0 0 rgba(255, 255, 255, 0.05)',
  },

  '&:active': {
    boxShadow: 'inset 1000px 0 0 rgba(255, 255, 255, 0.2)',
  },
}));
