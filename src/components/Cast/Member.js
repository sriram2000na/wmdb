import React from 'react';

export const Member = props => {
  if (
    props.details.profile_path !== undefined &&
    props.details.profile_path !== null
  ) {
    return (
      <a
        href='#'
        className='card'
        style={{
          textDecoration: 'none',
          color: '#000',
          border: 'none',
          width: '9.5rem',
          border: '1px solid #e3e3e3',
          padding: '0.5rem',
          transition: 'transform 0.1s ease'
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w185${props.details.profile_path}`}
          className='card-img-top'
          style={{
            boxShadow: '5px 5px 10px #bbb,-5px -5px 10px #bbb',
            display: 'inline-block',
            height: '10.9rem'
          }}
          alt='...'
        ></img>
        <p
          style={{
            marginBottom: '-0.55rem',
            paddingTop: '0.5rem',
            textAlign: 'center'
          }}
        >
          {props.details.name}
        </p>
        <span style={{ textAlign: 'center', padding: '0.1rem' }}>as</span>
        <p className='text-center'>{props.details.character}</p>
      </a>
    );
  } else {
    return null;
  }
};
export default Member;
