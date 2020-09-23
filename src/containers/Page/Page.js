import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import LogoIcon from '../../components/LogoIcon';

export default function Page({ children }) {

    // const classes = makeStyles(() => {
    //     root: {
    //         backgroundColor: '#2D3748'
    //     }
    // });

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <LogoIcon />
                    <Button variant="contained" size="small">
                        <Typography variant="button">pro plan</Typography>
                    </Button>
                    <Avatar alt="SUDO" src="/public/avatar.png" />
                </Toolbar>
            </AppBar>
            <Paper>
                <MenuList>
                    <Typography>Manage</Typography>
                    <MenuItem>View site</MenuItem>
                    <MenuItem>Create page</MenuItem>
                    <MenuItem>Blog articles</MenuItem>
                    <MenuItem>Files</MenuItem>
                    <MenuItem>Users</MenuItem>
                    <MenuItem>Subscriptions</MenuItem>
                    <MenuItem>Archived pages</MenuItem>
                    <Typography>Pro features</Typography>
                    <MenuItem>Themes</MenuItem>
                    <MenuItem>Plugins</MenuItem>
                    <MenuItem>Upgrade plans</MenuItem>
                </MenuList>
            </Paper>
            {children}
        </div>
    );
};
