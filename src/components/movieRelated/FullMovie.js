import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Member from '../Cast/Member';
import moment from 'moment';
const convToTime = time => {
  let hrs, min;
  hrs = parseInt(time / 60);
  time = time - hrs * 60;
  min = parseInt(time);

  return `${hrs < 10 ? '0' : ''}${hrs}hrs ${min}min`;
};
const FullMovie = ({ movie, getMovieById, match, loading }) => {
  let url;
  useEffect(() => {
    getMovieById(match.params.id);

    //eslint-disable-next-line
  }, []);
  url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div
        className='movie-overlay'
        style={{
          height: '100vh',
          width: '100vw',
          background: `url(${url}) no-repeat center center/cover`
        }}
      >
        <Link to={'/movies'}>
          <i className='back fas fa-chevron-circle-left'></i>
        </Link>
        <div className='container'>
          <div className='first-part'>
            {' '}
            {/* first-part => movietitle,overview*/}
            <div className='movie-title'>{movie.title}</div>
            <div className='movie-overview'>{movie.overview}</div>
          </div>
          <div
            className='genres'
            style={{
              fontWeight: '300',
              padding: '3.5rem',
              marginTop: '2.8rem',
              marginLeft: '1.7rem'
            }}
          >
            <p style={{ fontStyle: 'italic', fontSize: '1.4rem' }}>GENRES:</p>
            <ul style={{ fontWeight: '600' }}>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className='run-time'>
            <p
              style={{
                fontStyle: 'italic',
                fontWeight: '300',
                padding: '3.5rem',
                paddingBottom: '0.2rem',
                fontSize: '1.4rem',
                marginTop: '2.8rem',
                marginLeft: '1.7rem'
              }}
            >
              RUNTIME:
            </p>
            <span
              style={{
                fontWeight: '600',
                marginTop: '-1.1rem',
                marginLeft: '5.9rem'
              }}
            >
              {convToTime(movie.runtime)}
            </span>
            <div className='release'>
              <p
                style={{
                  fontStyle: 'italic',
                  fontWeight: '300',
                  padding: '3.5rem',
                  paddingTop: '2.5rem',
                  paddingBottom: '0.2rem',
                  fontSize: '1.4rem',
                  marginLeft: '1.7rem'
                }}
              >
                RELEASED ON:
              </p>
              <span
                style={{
                  fontWeight: '600',
                  marginTop: '-1.1rem',
                  marginLeft: '5.9rem'
                }}
              >
                {moment(movie.release_date).format('DD MMMM YYYY')}
              </span>
            </div>
          </div>
        </div>
        <div
          className='rating-info'
          style={{ background: 'rgba(255,255,255,0.5)', height: '15vh' }}
        >
          <p
            style={{
              fontSize: '1.4rem',
              padding: '1.1rem',
              marginTop: '0.6rem',
              paddingTop: '1.9rem'
            }}
          >
            <span>Rating: &nbsp; </span>
            {movie.vote_average}
          </p>
          <i
            className='fas fa-star'
            style={{ padding: 'auto 1.2rem auto 1.2rem' }}
          ></i>
        </div>
      </div>
      <div className='cast container'>
        {movie.credits.cast.slice(0, 19).map(member => (
          <Member key={movie.credits.cast.indexOf(member)} details={member} />
        ))}
      </div>
    </div>
  );
};
FullMovie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default FullMovie;
