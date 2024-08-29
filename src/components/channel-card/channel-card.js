import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ChannelCard = ({ video }) => {
    return (
        <Card sx={{
            width:  '320px',
            height: '400px',
            textAlign: 'center',
            boxShadow:'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Link to={`/channel/${video?.snippet?.channelId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardContent sx={{ height: '100%', marginTop:'100px' }}>
                    <Avatar
                        src={video?.snippet?.thumbnails?.high?.url}
                        alt={video?.snippet?.channelTitle}
                        sx={{ width: '150px', height: '150px', margin: 'auto' }}
                    />
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        mt={2}
                        component={Link}
                        to={`/channel/${video?.snippet?.channelId}`}
                        sx={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        {video?.snippet?.channelTitle}
                    </Typography>
                    <CheckCircle sx={{ fontSize: '16px', color: 'purple', mt: 1 }} />
                </CardContent>
            </Link>
        </Card>
    );
};

export default ChannelCard;
