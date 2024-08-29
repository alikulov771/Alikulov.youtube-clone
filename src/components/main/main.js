import React, {useEffect, useState} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import Category from "../category/category";
import {colors} from "../constants/constants";
import {ApiService} from "../api-service/api-service";
import Videos from "../videos/videos";

const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    const selectedCategory = (category) => setSelectCategory(category);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${selectCategory}`);
                setVideos(data.items);
            } catch (e) {
                console.log(e);
            }
        };
        fetchVideos();
    }, [selectCategory]);

    return (
        <Stack>
            <Category setSelectCategory={selectedCategory} selectCategory={selectCategory} />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} style={{fontWeight: 'bold', marginTop: '15px'}}>
                        {selectCategory}<span style={{color: colors.bgColor}}> videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Container>
            </Box>
        </Stack>
    );
};

export default Main;
