import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import ElevationScroll from './custom/ElevateScrollBar';
import { Tooltip } from '@mui/material';


const NavBar = () => {
    return (
        <ElevationScroll>
            <AppBar style={{ marginBottom: "80px", background: '#0e67b4' }} >
                <Container maxWidth="xl" /*color="#0e67b4"*/>
                    <Toolbar disableGutters>
                        <Tooltip title="Homepage">
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: "center" }}
                            >
                                <Link to="/">
                                    <img className="LogoImage" src={"/logoFinal2.jpg"} alt="Logo" height={60} />
                                </Link>
                            </Typography>
                        </Tooltip>
                        <Tooltip title="Homepage">
                            <Typography
                                variant="h6" y
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                <Link to="/">
                                    <img className="LogoImage" src={"/logoFinal2.jpg"} alt="Logo" height={60} />
                                </Link>
                            </Typography>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};
export default NavBar;
