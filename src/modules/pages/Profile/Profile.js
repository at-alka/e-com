import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PCard from '../../../components/PCard/PCard';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/list')
      .then(response => response.json())
      .then(data => {
        setPersons(data);
        setLoading(false);
      })
      .catch(error => {
        setError('somthing went wrong');
        setLoading(false);
      });
  }, []);

  console.log(persons,"data comming")

  return (
    <div className='profile-sec'>
      <div className='container'>
        <div className="wrapper">
          {
            loading ? <div>.....loading</div>
              :
              <>
                <div className='d-flex justify-content-end mb-4'>
                  <Link to="/add" className='gray-but'>Add Details</Link>
                </div>
                <div className='row'>

                  {Boolean(persons?.length) ? persons.map(profile => (
                    <div key={profile.id}>
                      {/* <PCard
                        avatar={profile.avatar}
                        name={profile.name}
                        email={profile.email}
                        dob={profile.dob}
                        country={profile.country}
                        persons={persons} 
                      />
                     */}
                      {console.log(profile,"alka")} 
                     <PCard {...{...profile}} />
                     
                     </div>

                  )) : "there is no data"}
                </div>
              </>
          }

        </div>
      </div>
    </div>
  )
}

export default Profile

