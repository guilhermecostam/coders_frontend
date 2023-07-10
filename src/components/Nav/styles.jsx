import {
  AppBar, styled, Container, Toolbar,
} from '@mui/material';

export const AppBarCustom = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.1)',
  boxShadow: theme.palette.shadow.main,
}));

export const ToolbarCustom = styled(Toolbar)(() => ({
  backgroundColor: 'rgba(0,0,0,0.1)',
}));

export const ContainerCustom = styled(Container)(() => ({
  backgroundColor: 'rgba(0,0,0,0.1)',
}));
