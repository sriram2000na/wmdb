import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import homecss from './homecss.css';
export class Home extends Component {
  render() {
    return (
      <div
        style={{ overflow: 'hidden' }}
        className='home-overlay d-flex justify-content-center align-items-center'
      >
        {/* <img
          src={require('../../img/homeback.jpg')}
          style={this.homeStyle}
          alt='Home'

        /> */}
        <div className='text-center'>
          <Link
            to='./movies'
            className='btn d-inline-block btn-danger'
            type='submit'
          >
            Discover
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
