import { Add, ArrowForwardOutlined} from '@mui/icons-material'
import { Card, CardActionArea, CardMedia, Fab, Tooltip, Typography , Box, Avatar,styled, Badge } from '@mui/material'
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
      height: '100%' ,
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

const CardStory = () => {
  return (
<Box display="flex" justifyContent="space-between" position="relative">
        <Card sx={{ width: 115  , borderRadius:"10px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="130"
              image="https://picsum.photos/209"
              alt="green iguana"
            />
            <Tooltip sx={{ 
              left:40, 
              top:-20, 
              width:"40px" , 
              height:"40px" , 
              border:"4px solid white",
               }}>
                <Fab color='primary'>
                    <Add />
                </Fab>
            </Tooltip>
              <Typography fontSize={13} fontWeight="bold" textAlign="center" marginBottom="10px">
              Create Story
              </Typography>
          </CardActionArea>
        </Card>

        <Card sx={{
              position:"relative", 
              width: 115  , 
              borderRadius:"10px" , 
              backgroundImage:"url('https://picsum.photos/207')"
          }}>
          <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                <Avatar sx={{
                        width:30 , 
                        height:30, 
                        border:"4px solid #1877F2" , 
                        top:"5px" , 
                        left:"5px"
                        }}
                        alt="Remy Sharp" src="https://picsum.photos/209" />
          </StyledBadge>
              <Typography 
                fontSize={13} 
                fontWeight="bold" 
                position="absolute"
                left="20px"
                bottom="10px"
                textAlign="center"
                color="white"
              >
              Ward Ruman
              </Typography>
        </Card>
        <Card sx={{position:"relative", width: 115  , borderRadius:"10px" , backgroundImage:"url('https://picsum.photos/201')"}}>
          <Avatar sx={{width:30 , height:30, border:"4px solid #1877F2" , top:"5px" , left:"5px"}} src="https://picsum.photos/202" />
              <Typography 
                fontSize={13} 
                fontWeight="bold" 
                position="absolute"
                left="20px"
                bottom="10px"
                textAlign="center"
                color="white"
              >
              Ward Ruman
              </Typography>
        </Card>
        <Card sx={{position:"relative", width: 115  , borderRadius:"10px" , backgroundImage:"url('https://picsum.photos/203')"}}>
        <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                <Avatar sx={{
                        width:30 , 
                        height:30, 
                        border:"4px solid #1877F2" , 
                        top:"5px" , 
                        left:"5px"
                        }}
                        alt="Remy Sharp" src="https://picsum.photos/209" />
          </StyledBadge>
              <Typography 
                fontSize={13} 
                fontWeight="bold" 
                position="absolute"
                left="20px"
                bottom="10px"
                textAlign="center"
                color="white"
              >
              Ward Ruman
              </Typography>
        </Card>
        <Card sx={{position:"relative", width: 115  , borderRadius:"10px" , backgroundImage:"url('https://picsum.photos/205')"}}>
          <Avatar sx={{width:30 , height:30, border:"4px solid #1877F2" , top:"5px" , left:"5px"}} src="https://picsum.photos/206" />
              <Typography 
                fontSize={13} 
                fontWeight="bold" 
                position="absolute"
                left="20px"
                bottom="10px"
                textAlign="center"
                color="white"
              >
              Ward Ruman
              </Typography>
        </Card>
       <ArrowForwardOutlined 
       fontSize="large" 
       sx={{bgcolor:"white" , borderRadius:"100%" , position:"absolute" , right:"-20px",top:"40%"}}  
       />
</Box>
  )
}

export default CardStory