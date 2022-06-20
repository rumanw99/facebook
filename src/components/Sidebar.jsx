import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon , Switch  ,Avatar ,Typography  } from '@mui/material';
import { AssistantPhoto, BookmarkAdd, DateRange, ExpandCircleDown, Groups, Memory, MenuBook, ModeNight, PeopleAltRounded, StarBorderPurple500, Subscriptions } from '@mui/icons-material';


const Sidebar = ({mode , setMode}) => {
  return (
    <Box 
        flex={1} 
        p={2}
        sx={{display:{xs:"none" , sm:"block"}}}
    >
      <Box position="fixed" sx={{overflowY:"auto" , height:"550px" }}>
      <List gap="-5px">
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Avatar sx={{width:30 , height:30}} src="https://picsum.photos/200" />
            </ListItemIcon>
            <Typography variant='p' color='black'>Ward Ruman</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <PeopleAltRounded color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Search of friends</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Groups color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Groups</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Subscriptions color="primary" fontSize='medium'  />
            </ListItemIcon>
            <Typography variant='p' color='black'>Watch</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Memory color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Memories</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <BookmarkAdd color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Saved items</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <MenuBook color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Pages</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AssistantPhoto color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Occasions</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <DateRange color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Events</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <StarBorderPurple500 color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Favorite</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ExpandCircleDown color="primary" fontSize='medium' />
            </ListItemIcon>
            <Typography variant='p' color='black'>Show more</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ModeNight color="primary" fontSize='medium' />
            </ListItemIcon>
            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar;