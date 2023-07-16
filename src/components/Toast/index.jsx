import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

export default function Toast({
  open, setOpen, message, severity,
}) {
  const handleClose = () => setOpen(false);

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      action={action}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
