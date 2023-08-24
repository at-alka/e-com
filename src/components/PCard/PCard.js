import React from 'react'
import { Link } from 'react-router-dom';

function PCard({ avatar, name, email, dob, country, id }) {
  return (
    <div className='col-lg-4'>
      <div className='Card-box'>
        <img src={avatar} />
        <div className='p-3'>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{dob}</p>
          <p>{country}</p>
          <Link to={{ pathname: '/add', search: `?id=${id}` }}>Edit</Link>
        </div>
      </div>
    </div>
  );
}

export default PCard
