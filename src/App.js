import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed  from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import {Box, Stack , createTheme, ThemeProvider } from '@mui/material';
import {useState} from 'react';

function App() {
  const [mode , setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode : mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly" backgroundColor = "#ECF3FF" >
        <Sidebar setMode={setMode} mode={mode} /> 
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
