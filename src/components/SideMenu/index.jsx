import { DoorBack } from '@mui/icons-material';
import {
  Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import React from 'react';
import { closeSession } from 'src/helpers/session';

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
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => closeSession()}>
              <ListItemIcon>
                <DoorBack />
              </ListItemIcon>
              <ListItemText primary="sair" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
