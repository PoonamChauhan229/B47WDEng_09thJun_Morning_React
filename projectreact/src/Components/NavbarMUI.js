import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function NavbarMUI() {
const navigate=useNavigate()
  return (
    <Box sx={{ display: 'flex',marginBottom:"5%" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}
              onClick={()=>{
                navigate('/')
              }}
              >Home</Button>

<Button sx={{ color: '#fff' }}
              onClick={()=>{
                navigate('/addmovie')
              }}
              >AddMovie</Button>
         

          <Button sx={{ color: '#fff' }}
              onClick={()=>{
                navigate('/colorgame')
              }}
              >Colorgame</Button>
          </Box>
          
        </Toolbar>
      </AppBar>      
    </Box>
  );
}

export default NavbarMUI;