import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import DrawerMenu from '../../components/navigation/DrawerMenu';
import HeaderMenu from '../../components/navigation/HeaderMenu';
import MainContainer from '../../components/navigation/MainContainer';

type Props = {
    title: string,
    children: React.ReactNode;
}

export default function Index(props: Props) {
    const [open, setOpen] = React.useState(false);
    const menuItems : string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4','Option 5', 'Option 6', 'Option 7'];

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        if(open){
        toggleMenu();
        }
    }

    return (<>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <HeaderMenu title={props.title} open={open} toggleMenu={toggleMenu} />
            <DrawerMenu items={menuItems} open={open} />
            <MainContainer closeMenu={closeMenu}>
                {props.children}
            </MainContainer>
        </Box>
    </>)
}