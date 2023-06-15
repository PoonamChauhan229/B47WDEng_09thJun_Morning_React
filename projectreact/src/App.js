import './App.css';
import AddColor from './Components/AddColor';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import { useState } from 'react';
import { allmovies } from './Components/constants';
import { Route, Routes} from "react-router-dom";
import NotFound from './Components/NotFound';
function App() {
  const [movieList,setMovieList]=useState(allmovies)
    return (
    <>
    <Navbar/>

      {/* <AddMovie setMovieList={setMovieList} movieList={movieList}/>
      <MovieList movieList={movieList} />
      <AddColor/> */}
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route exact path='/' element={<MovieList movieList={movieList} />}/>

    <Route exact path='/addmovie' element={<AddMovie setMovieList={setMovieList} movieList={movieList}/>}/>

    <Route exact path='/colorgame' element={<AddColor/>}/>
      {/*  *   */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
