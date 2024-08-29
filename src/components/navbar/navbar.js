import React from 'react';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

import {colors, logo} from "../constants/constants";
const Navbar = () => {
    return (
        <>
            <Box sx={{ backgroundColor: colors.bgColor, position: 'sticky', top: 0, zIndex: 999, p: 1 }}>
                <Stack
                    direction="row"
                    justifyContent='space-between'
                    alignItems="center"
                >
                    <Link  to="/">
                        <img
                            src={'https://cdn-icons-png.flaticon.com/128/1384/1384070.png'}
                            alt="Logo"
                            height={70}

                        />
                    </Link>

                    <SearchBar />
                    <Box/>
                </Stack>
            </Box>
        

        </>
    );

};
export default Navbar;
