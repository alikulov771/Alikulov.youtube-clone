import React from 'react';
import { Card, CardMedia, CardContent, Typography, Avatar, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { colors } from '../constants/constants';
import moment from "moment";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
    return (
        <Card sx={{ width: '320px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{ height: '180px' }}
                />
            </Link>

            <CardContent sx={{
                background: colors.bgColor,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '16px'
            }}>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{ opacity: '0.7', fontSize: '14px' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: '17px', lineHeight: '1.4em', height: '3em', overflow: 'hidden' }}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opacity: '0.6', marginTop: '10px', fontSize: '15px', height: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {video?.snippet?.description.slice(0, 80)}
                    </Typography>
                </Link>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ paddingTop: '20px' }}
                >
                    <Link to={`/channel/${video?.snippet?.channelId}`}>
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                    </Link>
                    <Link to={`/channel/${video?.snippet?.channelId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="subtitle2" color="gray" sx={{ flex: 1 }}>
                            {video?.snippet?.channelTitle}
                        </Typography>
                    </Link>
                    <CheckCircle sx={{ fontSize: '16px', color: 'gray' }} />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
