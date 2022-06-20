import { EmojiEmotionsOutlined, Image, SearchOutlined, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Card , Box, styled, InputBase, TextField, Stack, Typography } from '@mui/material'
import React from 'react';

const Search = styled("div")(({theme}) => ({
    backgroundColor : "#ECF3FF",
    padding:"0 10px",
    borderRadius : "20px",
    width:"100%",
    display:"flex",
    alignItems:"center",
}))

const CardPost = () => {
  return (
    <Card sx={{margin:5 , padding:2}}>
        <Box sx={{display:"flex" , alignAitems:"center" , gap:"5px" }}>
            <Avatar src="https://picsum.photos/200" sx={{width:35 , height:35}} />
            <Search><SearchOutlined sx={{color:"gray"}} /><InputBase placeholder="Whta's on your mind ?" /></Search>
        </Box>
        <TextField
                sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          variant="standard"
        />
        <Stack direction="row" mt={1} mb={1} justifyContent="space-around">
            <Box sx={{display:"flex" , gap:"5px"}}>
              <VideoCameraBack fontSize='medium' sx={{color:"#F35369"}} />
              <Typography>Live Video</Typography>
            </Box>
            <Box sx={{display:"flex" , gap:"5px"}}>
              <Image fontSize='medium' color="success" />
              <Typography>Photo/Video</Typography>
            </Box>
            <Box sx={{display:"flex" , gap:"5px"}}>
              <EmojiEmotionsOutlined fontSize='medium' sx={{color:"#F5C33B"}} />
              <Typography>Feeling/Activity</Typography>
            </Box>
        </Stack>
    </Card>
  )
}

export default CardPost