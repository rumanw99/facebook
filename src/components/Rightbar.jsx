import { Box, Typography , ListItem ,ListItemButton, Avatar , ImageList , ImageListItem, List , ListItemAvatar, ListItemText, Divider, Badge, styled } from '@mui/material'
import React from 'react';
import {MoreHoriz , SearchOutlined , VideoCall} from '@mui/icons-material';

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

const StyledBadge1 = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'white',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  },
}));

const Rightbar = () => {
  return (
    <Box 
        flex={1} 
        p={2}
        sx={{display:{xs:"none" , sm:"block" }}}
    >
      <Box position="fixed" sx={{overflowY:"auto" , height:"550px" }}>

        <Typography sx={{display:"flex" , color:"gray"}}  variant="h6" fontWeight={400}>
          <Typography width="50%">Contacts</Typography>
          <VideoCall  sx={{width:"15%"}} />
          <SearchOutlined sx={{width:"15%"}} />
          <MoreHoriz sx={{width:"15%"}} />
        </Typography>
        
        <List >
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/209" />
            </StyledBadge>
            <Typography variant='p' color='black' marginLeft="10px" >Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/201" />
            </StyledBadge>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/202" />
            </StyledBadge>
            <Typography variant='p' color='black' marginLeft="10px" >Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/203" />
            </StyledBadge>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/204" />
            </StyledBadge>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge1
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={3}
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/205" />
            </StyledBadge1>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge1
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={4}
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/206" />
            </StyledBadge1>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge1
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={2}
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/207" />
            </StyledBadge1>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <StyledBadge1
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={1}
                >
                  <Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="https://picsum.photos/208" />
            </StyledBadge1>
            <Typography variant='p' color='black' marginLeft="10px">Ward Ruman</Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <Typography variant="h6" fontWeight={100} >Latest Potos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img src="https://picsum.photos/210" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://picsum.photos/211" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://picsum.photos/212" alt="" />
            </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} >Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/215" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://picsum.photos/213" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://picsum.photos/214" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar