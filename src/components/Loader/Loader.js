import React, { Component } from 'react';
import loading from '../marvel.gif';
export class Loader extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
        <img
          src={loading}
          style={{ display: 'block', margin: 'auto', width: '500px' }}
          alt='LOADINGGGG'
        />
      </div>
    );
  }
}

export default Loader;
