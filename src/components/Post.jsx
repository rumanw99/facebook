import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, MoreHoriz, Share } from '@mui/icons-material';

const Post = () => {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreHoriz />
        </IconButton>
      }
      title="Ward Ruman"
      subheader="September 14, 2022"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardMedia
      component="img"
      height="194"
      image="https://picsum.photos/200"
      alt="Paella dish"
    />
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post