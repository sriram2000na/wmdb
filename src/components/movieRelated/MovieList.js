import React, { Component } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import Loader from '../Loader/Loader';
export class MovieList extends Component {
  componentDidMount() {
    this.props.getDefaultMovies();
  }
  render() {
    if (this.props.loading) {
      return <Loader />;
    }
    return (
      <>
        <Navbar />
        <div
          className='container'
          key={0}
          style={{
            gridTemplateColumns: 'repeat(3,1fr)',
            display: 'grid',
            gridGap: '1.2rem'
          }}
        >
          {this.props.movieList.map(movie => (
            <Movie key={this.props.movieList.indexOf(movie)} details={movie} />
          ))}
        </div>
      </>
    );
  }
  static propTypes = {
    movieList: PropTypes.array.isRequired
  };
}

export default MovieList;
