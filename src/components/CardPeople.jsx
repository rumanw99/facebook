import { Card , Box , Typography , Button, CardActionArea, CardContent, CardActions } from '@mui/material';
import {ClearTwoTone  , CardMembership, PersonAddTwoTone, MoreHoriz  , ArrowRight} from '@mui/icons-material';
import React from 'react'

const CardPeople = () => {
  return (
    <Card sx={{margin:5 , padding:2 , position:"relative"}}>

      <ArrowRight
      
      sx={{
        width:"50px",
        height:"50px",
        backgroundColor:"white",
        borderRadius:"100%",
        position:"absolute",
        right:"45px",
        top:"40%",
        zIndex:2,
        cursor:"pointer"
      }} />

        <Box sx={{display:"flex" , justifyContent:"space-between"}}>
          <Typography fontWeight="600" >People you may know</Typography>
          <MoreHoriz />
        </Box>

        <Box sx={{display:"flex" , marginTop:"20px" , position:"relative" , gap:"10px"}}>

        <Card sx={{ width: 200 }}>
            <CardActionArea>
              <Card
                sx={{ backgroundImage:"url('https://picsum.photos/222')" , height:"200px"}}>
              <ClearTwoTone 
              
              fontSize="large"
              sx={{marginLeft:"20px" , marginTop:"20px",color:"white"  , backgroundColor:"black" , opacity:"0.3" , borderRadius:"100%" }} />
                </Card>
              <CardContent>
                <Typography fontSize={18} fontWeight="bold" variant="h3" component="div">
                  ward ruman
                </Typography>
                <Typography variant="body1" color="text.secondary" component="p">
                <CardMembership fontSize="10px" sx={{marginTop:"10px" , marginRight:"5px"}} />
                  1 mutual friend
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth startIcon={ <PersonAddTwoTone  />}>
                <Typography sx={{marginLeft:"10px" }}>Add Friends</Typography>
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ width: 200 }}>
            <CardActionArea>
              <Card
                sx={{ backgroundImage:"url('https://picsum.photos/232')" , height:"200px"}}>
              <ClearTwoTone 
              fontSize="large"
              sx={{marginLeft:"20px" , marginTop:"20px" , color:"white" , backgroundColor:"black" , opacity:"0.3" , borderRadius:"100%" }} />
                </Card>
              <CardContent>
                <Typography fontSize={18} fontWeight="bold" variant="h3" component="div">
                  ward ruman
                </Typography>
                <Typography variant="body1" color="text.secondary" component="p"
                sx={{marginTop:"33px" , marginRight:"5px"}}
                >
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth startIcon={ <PersonAddTwoTone  />}>
                <Typography sx={{marginLeft:"10px" }}>Add Friends</Typography>
              </Button>
            </CardActions>
        </Card>

        <Card sx={{ width: 200 , position:"absolute" , right:"-120px"}}>
            <CardActionArea>
              <Card
                sx={{ backgroundImage:"url('https://picsum.photos/244')" , height:"200px"}}>
              <ClearTwoTone 
              fontSize="large"
              sx={{marginLeft:"20px" , marginTop:"20px" , color:"white" , backgroundColor:"black" , opacity:"0.3" , borderRadius:"100%" }} />
                </Card>
              <CardContent>
                <Typography fontSize={18} fontWeight="bold" variant="h3" component="div">
                  ward ruman
                </Typography>
                <Typography variant="body1" color="text.secondary" component="p"
                sx={{marginTop:"33px" , marginRight:"5px"}}
                >
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth startIcon={ <PersonAddTwoTone  />}>
                <Typography sx={{marginLeft:"10px" }}>Add Friends</Typography>
              </Button>
            </CardActions>
        </Card>

        
        </Box>
        <Button color="primary" textalign="center" fullWidth sx={{marginTop:"10px"}}>
          See all
        </Button>
    </Card>
  )
}

export default CardPeople