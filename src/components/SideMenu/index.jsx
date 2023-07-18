import {
  DoorBack, Home, IndeterminateCheckBox,
} from '@mui/icons-material';
import {
  Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeSession, getSessionName } from 'src/helpers/session';

const drawerWidth = 240;

export default function SideMenu() {
  return (
    <Box sx={{ display: 'flex', position: 'absolute' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ width: '100%' }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <img
                  src="https://www.gravatar.com/avatar/?d=identicon"
                  width="24"
                  height="24"
                  alt="avatar"
                  style={{ borderRadius: '50%' }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2" color="secondary">{getSessionName()}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/feed">
              <ListItemButton sx={{ width: '100%' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Home />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Feed</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/your-projects">
              <ListItemButton sx={{ width: '100%' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IndeterminateCheckBox />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Seus projetos</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => closeSession()}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <DoorBack />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2" color="secondary">Sair</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
