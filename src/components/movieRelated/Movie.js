import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

export class Movie extends Component {
  render() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      return (
        <a
          href={`/movie/${this.props.details.id}`}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <div className='card' style={{ width: '19rem' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${this.props.details.poster_path}`}
              style={{ height: '60%', opacity: '0.9', width: '100%' }}
              alt='card cap'
              className='card-img-top'
            />
            <div
              className='card-body'
              style={{ width: '18rem', overflow: 'hidden', height: '12rem' }}
            >
              <h5 className='card-title'>{this.props.details.title}</h5>
              <p
                className='card-text'
                style={{ lineHeight: '1.4', overflow: 'none' }}
              >
                {this.props.details.overview !== undefined
                  ? this.props.details.overview.substring(0, 181) + '....'
                  : 'undef'}
              </p>
            </div>
          </div>
        </a>
      );
    }
  }
  static propTypes = {
    details: PropTypes.object.isRequired
  };
}

export default Movie;
