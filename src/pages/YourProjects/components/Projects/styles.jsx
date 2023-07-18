import { Card, CardActions, styled } from '@mui/material';

export const CardCustom = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const CardActionsCustom = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
