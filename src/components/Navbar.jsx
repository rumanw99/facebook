import { Mail, Notifications, Pets , FacebookOutlined , HomeOutlined , PeopleOutline , SmartDisplayOutlined , GroupsOutlined , SportsEsportsOutlined ,WidgetsOutlined, ArrowDropDownOutlined ,SearchOutlined
} from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography , Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React , {useState} from 'react';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search = styled("div")(({theme}) => ({
    backgroundColor : "#ECF3FF",
    padding:"0 10px",
    borderRadius : "20px",
    width:"100%",
    display:"flex",
    alignItems:"center",
}))
const Icons = styled(Box)(({theme}) => ({
    display:"none",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))
const UserBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))
const Navbar = () => {
    const [open , setOpen] = useState(false);
  return (
    <AppBar position='sticky' sx={{bgcolor:"white" , color:"black"}}>
        <StyledToolbar>
            <Icons gap={1}>
              <FacebookOutlined  fontSize="large"  color="primary" />
            <Pets sx={{display:{xs:"block" , sm:"none"}}} />
            <Search><SearchOutlined sx={{color:"gray"}} /><InputBase placeholder='search in facebook...' /></Search>
            </Icons>
            <Icons gap={10} marginRight={20} sx={{color:"gray"}}>
            <HomeOutlined fontSize="large"  />
            <PeopleOutline fontSize="large" />
            <SmartDisplayOutlined fontSize="large" />
            <GroupsOutlined fontSize="large" />
            <SportsEsportsOutlined fontSize="large" />
            </Icons>
            <Icons gap={2}>
                <Avatar 
                        sx={{width:30 , height:30}} 
                        src="https://picsum.photos/200" 
                        onClick={e => setOpen(true)}
                />
                <ArrowDropDownOutlined fontSize='large' sx={{ bgcolor:"#ECF3FF" , borderRadius:"100%"}} />
                <Badge badgeContent={2} color="error">
                  <Box sx={{ bgcolor:"#ECF3FF" , borderRadius:"100%"  , width:35 , height:35 , textAlign:"center"}}>
                    <Notifications fontSize='small' sx={{marginTop:"5px"}} />
                    </Box>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Mail fontSize='large'  />
                </Badge>
                <WidgetsOutlined fontSize='large' />
               
            </Icons>
            <UserBox onClick={e => setOpen(true)}>
                <Avatar sx={{width:30 , height:30}} src="https://picsum.photos/200" />
                <Typography vatiant="span">WARD</Typography>
            </UserBox>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar