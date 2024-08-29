import React from 'react';
import { Box, Stack } from "@mui/material";
import VideoCard from "../video-card/video-card";
import ChannelCard from "../channel-card/channel-card";

const Videos = ({ videos }) => {
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={{ xs: 'center', sm: 'space-between', md: 'space-between', lg: 'space-between' }}
            alignItems={'center'}
            gap={2}
            sx={{
                margin: '0 auto',
                maxWidth: { xs: '100%', sm: '90%', md: '85%', lg: '95%' },
                '@media (min-width: 768px) and (max-width: 911px)': {
                    maxWidth: '90%'
                }
            }}
        >
            {videos.map((item) => (
                <Box
                    key={item.id.videoId || item.id.channelId}
                    sx={{
                        flexBasis: { xs: '100%', sm: '48%', md: '31%', lg: '23%' },
                        marginBottom: '16px',
                        '@media (min-width: 768px) and (max-width: 911px)': {

                            maxWidth: '100%'
                        }
                    }}
                >
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard video={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
