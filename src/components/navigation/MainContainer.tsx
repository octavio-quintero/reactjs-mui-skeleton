import { styled } from '@mui/material';
import React from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    marginTop:20
  }));


type Props = {
    children: React.ReactNode;
    closeMenu: () => void;
}

export default function MainContainer(props: Props) {
    return (<Main sx={{ flexGrow: 1, p: 3 }} onClick={props.closeMenu}>
          {props.children}
      </Main>

    )
}