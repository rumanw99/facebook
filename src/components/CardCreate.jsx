import { VideoCall } from '@mui/icons-material'
import { Avatar, Badge, Button, Card,  styled , Typography } from '@mui/material'
import React from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const CardCreate = () => {
  return (
    <Card sx={{margin:5 , padding:2 , display:"flex" , gap:"20px"}}>
    
                <Button variant='outlined' sx={{display:"flex" , gap:"10px" , borderRadius:"20px"}} >
                    <VideoCall fontSize='large' color="secondary" />
                     <Typography>Create Room</Typography>
                </Button>

            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar  sx={{border:"0.5px solid black" ,  width:40 , height:40}} alt="Remy Sharp" src="https://picsum.photos/214" />
            </StyledBadge>
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar  sx={{border:"0.5px solid black" ,  width:40 , height:40}} alt="Remy Sharp" src="https://picsum.photos/215" />
            </StyledBadge>
    </Card>
  )
}

export default CardCreate