import {
  AppBar, styled,
} from '@mui/material';

export const AppBarCustom = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.1)',
  boxShadow: theme.palette.shadow.main,
}));
