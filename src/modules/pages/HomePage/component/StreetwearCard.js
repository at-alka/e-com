import React from 'react'
import { StreetData } from '../../../../constants/HomeData'
function StreetwearCard() {
  return (
    <div className='streetSection'>
        <div className='container'>
            <div className='row'>
                { StreetData && StreetData.map((item,index) =>(
                    <div className='col-lg-4 col-md-4 col-12'>
                      <div className='streetIm'key={index}>
                        <img src={item.image} />
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                    ))}
                
            </div>
        </div>

    </div>
  )
}

export default StreetwearCard