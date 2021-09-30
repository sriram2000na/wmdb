import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import axios from 'axios';
import FullMovie from './components/movieRelated/FullMovie';
import MovieList from './components/movieRelated/MovieList';
const App = () => {
  const [movie, setmovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [movieList, setmovieList] = useState([]);
  const getMovieById = async id => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0dd6d34d512de01c5ea0775487aae815&append_to_response=credits`
    );
    setmovie(res.data);
    console.log(res.data);
    setLoading(false);
  };
  const getDefaultMovies = async () => {
    setLoading(true);
    console.log(loading);
    const res = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=0dd6d34d512de01c5ea0775487aae815&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&append_to_response=credits'
    );
    setmovieList(res.data.results);
    // console.log(res.data.results);
    setLoading(false);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route
            exact
            path='/movies'
            render={props => {
              return (
                <MovieList
                  {...props}
                  getDefaultMovies={getDefaultMovies}
                  loading={loading}
                  movieList={movieList}
                />
              );
            }}
          ></Route>
          <Route
            exact
            path='/movie/:id'
            render={props => {
              return (
                <FullMovie
                  {...props}
                  getMovieById={getMovieById}
                  movie={movie}
                  loading={loading}
                />
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
