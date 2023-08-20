import React from 'react'
import {clothesData} from '../../../../constants/HomeData'
function ClothesWear() {
  return (
    <div className='container'>
      <div className='row'>
        {clothesData && clothesData.map((item) =>(
             <div className='col-lg-2 col-md-4 col-6'>
               <div className='clothes-sec'>
                 <img src={item.image}/>
                  <h6>{item.name}</h6>
               </div>
             </div>
        ))}
       
      </div>
    </div>
  )
}

export default ClothesWear