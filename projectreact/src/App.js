import './App.css';
import AddColor from './Components/AddColor';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import { useState } from 'react';
import { allmovies } from './Components/constants';
import { Navigate, Route, Routes} from "react-router-dom";
import NotFound from './Components/NotFound';
import MovieDetails from './Components/MovieDetails';
import NavbarMUI from './Components/NavbarMUI';
function App() {
  const [movieList,setMovieList]=useState(allmovies)
    return (
    <>
    {/* <Navbar/> */}
    <NavbarMUI/>
    {/* <MovieDetails/> */}

      {/* <AddMovie setMovieList={setMovieList} movieList={movieList}/>
      <MovieList movieList={movieList} />
      <AddColor/> */}
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route exact path='/' element={<MovieList movieList={movieList} />}/>

    <Route exact path='/addmovie' element={<AddMovie setMovieList={setMovieList} movieList={movieList}/>}/>

    {/* <Route exact path='/colorgame' element={<AddColor/>}/> */}
      {/*  *   */}
      {/* <Route path="*" element={<NotFound/>}/> */}
      {/* Not found is 404 error */}
      {/* Redirection */}
      {/* <Route path="/404" element={<NotFound/>}/>
      <Route path="*" element={<Navigate replace to='/404'/>}/> */}

      {/* Task */}

      <Route exact path='/colorgame' element={<AddColor/>}/>
      {/* colorgame */}

    <Route exact path='/addcolor' element={<Navigate replace to='/colorgame'/>}/>

    {/* `/movies/${id}` */}
    <Route exact path="/movies/:id" element={<MovieDetails movieList={movieList}/>}/>
    </Routes>
    </>
  );
}

export default App;
