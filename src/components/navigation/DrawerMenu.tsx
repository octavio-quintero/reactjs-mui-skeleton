import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const drawerWidth = 240;

type Props = {
    open: boolean,
    items: string[]
}

export default function DrawerMenu(props: Props) {

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          zIndex: (theme) => theme.zIndex.drawer - 1,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
             width: drawerWidth, 
             boxSizing: 'border-box' 
            },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {props.items.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
  );
}