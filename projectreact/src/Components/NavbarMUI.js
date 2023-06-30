import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const filterMovieData=(searchText,movieList)=>{
 
  return (movieList.filter((element)=>element.name.toUpperCase().includes(searchText.toUpperCase())))
}

function NavbarMUI({setMovieList,movieList,filterMovieList,setfilterMovieList,mode,setMode}) {
 const cartItems=useSelector(store=>store.cart.items)
 
  const[searchText,setSearchText]=useState("")
  console.log(filterMovieList)
  console.log("mode is",mode)
  const handleSearchChange=(e)=>{
    const value=e.target.value
    setSearchText(value)
    console.log(searchText)
    //handleSearchBlur()
  }

  const handleSearchBlur=()=>{
    console.log(1)
    //filter out the data from the array
    const data=filterMovieData(searchText,movieList)
    console.log(data)
    //update the data=> movielist
    // setMovieList(data)=>1 search
    setfilterMovieList(data)
    }
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
            WebApp-Movies-B47 
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
         

          <Button sx={{ color: '#fff' }}
              onClick={()=>{
                navigate('/propdrilling')
              }}
              >PropDrilling</Button>
         

          <Button sx={{ color: '#fff' }}
              onClick={()=>{
                navigate('/themecontext')
              }}
              >useContext</Button>

              <Button sx={{ color: '#fff' }}
              onClick={()=>{setMode(mode==="light"?"dark":"light")}}
              >{mode==="light"?"dark Mode":"light Mode"}</Button>

            <Button sx={{ color: '#fff' }}
            onClick={()=>{
              navigate('/tictactoe')
            }}
            >TicTacToe</Button>



        <Button sx={{ color: '#fff' }}
        onClick={()=>{
          navigate('/cart')
        }}
        >Cart-{cartItems.length} Items</Button>


<Button sx={{ color: '#fff' }}
        onClick={()=>{
          navigate('/profile')
        }}
        >Class Component</Button>
          
       </Box>
          
        {/* serach functionality added */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            value={searchText}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}     
              onBlur={handleSearchBlur}         

            />
          </Search>

        </Toolbar>
      </AppBar>      
    </Box>
  );
}

export default NavbarMUI;
          


        



          
       