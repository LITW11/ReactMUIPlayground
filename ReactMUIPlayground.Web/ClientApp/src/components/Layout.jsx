import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ flexBasis: '200px' }}>
                            <Typography variant="h6" component="div">
                                MUI Demo
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/tables">Tables</Button>
                            <Button color="inherit" component={Link} to="/dropdown">Drop Down</Button>
                            <Button color="inherit" component={Link} to="/dialogs">Dialogs</Button>
                        </Box>
                        <Box sx={{ flexBasis: '200px' }} />
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{ mt: 5 }}>
                {children}
            </Container>
        </>
    )
}

export default Layout;