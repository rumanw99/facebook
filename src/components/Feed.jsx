import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

import CardStory from './CardStory';
import CardPost from './CardPost';
import CardCreate from './CardCreate';
import CardPeople from './CardPeople';

const Feed = () => {
  return (

    <Box flex={2} p={2}>
      <CardStory />
      <CardPost />
      <CardCreate />
      <CardPeople />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed