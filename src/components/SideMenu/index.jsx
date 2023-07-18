import { DoorBack } from '@mui/icons-material';
import {
  Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import React from 'react';
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
            <ListItemButton>
              <ListItemIcon>
                <img
                  src="https://www.gravatar.com/avatar/?d=identicon"
                  width="24"
                  height="24"
                  alt="avatar"
                  style={{ borderRadius: '50%' }}
                />
              </ListItemIcon>
              <ListItemText primary={getSessionName()} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => closeSession()}>
              <ListItemIcon>
                <DoorBack />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
