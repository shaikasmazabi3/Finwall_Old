import React,{useState} from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuOpen } from '@mui/icons-material';
import Sidebar from './Sidebar';
const Home = () => {
    const [menuopen, setmenuopen] = useState(false);
  return (
    <div>
      <AppBar position='fixed' sx={{backgroundColor:'rgb(255,255,255,0.1)'}}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon onClick={<Sidebar/>}/>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            
          >
            <MenuOpen/>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home
