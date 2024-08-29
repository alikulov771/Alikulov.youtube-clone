import React, { useState } from 'react';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { colors } from "../constants/constants";

const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const searchHandler = e => {
        e.preventDefault();
        if (value) {
            navigate(`/search/${value}`);
            setValue('')
        }
    };

    return (
        <Paper
            component={'form'}
            onSubmit={searchHandler}
            sx={{
                border: `1px solid ${colors.bgColor}`,
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                width: { xs: '70%', sm: '50%', md: '70%', lg: '60%', xl: '50%' },
                maxWidth: '400px',
                mx: 'auto',
                my: { xs: 1, sm: 2 },
                position: 'relative',
                paddingRight: '56px', // IconButton kengligi uchun bo'sh joy
                height: '40px',
                overflow: 'hidden', // Scrollarni olib tashlash
            }}
        >
            <input
                type='text'
                placeholder='Search...'
                className='search-bar'
                onChange={e => setValue(e.target.value)}
                value={value}
                style={{
                    border: 'none',
                    outline: 'none',
                    flex: 1,
                    fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px', xl: '22px' },
                    padding: '10px',
                    height: '100%',
                    boxSizing: 'border-box',
                    overflow: 'hidden', // Scrollarni olib tashlash
                }}
            />

            <IconButton
                type='submit'
                sx={{
                    p: { xs: '8px', sm: '10px', md: '12px' },
                    color: colors.bgColor,
                    position: 'absolute',
                    right: 0,
                    height: '100%',
                    overflow: 'hidden', // Scrollarni olib tashlash
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
