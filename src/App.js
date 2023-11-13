import React, { useState } from 'react';
import MovieContainer from './components/MovieContainer';
import './App.css';

import Navbar from './components/Navbar';
import IntroContainer from './components/IntroContainer';
import Loader from './components/Loader';
import Error from './components/Error';

function App() {
      const[error,setError]=useState(false);
      const [movieData, setMovieData] = useState(null);
      const[loader,setLoader]=useState(false);
      const [display,setDisplay]=useState(false);
      const [intro,setIntro]=useState(false);
  function fetchMovieDetails() {
  setError(false);
  setDisplay(false);
  setIntro(true);
  setLoader(true);

  let API = 'http://www.omdbapi.com/?i=tt3896198&apikey=944fa852&t=';
  let moviename = document.getElementById('movieName'); // Updated to 'movieName'
  let apiquery = API + moviename.value;


    fetch(apiquery).then(function(response){
      return response.json();
  }).then(function(data){
    setMovieData(data);
    if(data.Error!=="Movie not found!"){
      
    setLoader(false);
    setDisplay(true);
    }else{
      setError(true);
      setLoader(false);
    }
  })
}



  

  return (
    <>
   
    <Navbar fetch ={fetchMovieDetails}/>
     
      <MovieContainer title={movieData ? movieData.Title : ''} display={display} desc ={movieData ? movieData.Plot : ''} released= {movieData ? movieData.Released : ''}
      actor={movieData ? movieData.Actors : ''} director={movieData ? movieData.Director : ''} coll={movieData ? movieData.BoxOffice : ''} lang={movieData ? movieData.Language : ''}
award={movieData ? movieData.Awards : ''}  ratings={movieData ? movieData.imdbRating : ''}  genre=  {movieData ? movieData.Genre : ''} src= {movieData ? movieData.Poster : ''}
      />
   <IntroContainer intro={intro}/>
   <Loader loader={loader}/>
   <Error error={error}/>
   
   
    </>

  );
}

export default App;

