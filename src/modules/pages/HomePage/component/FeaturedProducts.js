import React, { useState } from 'react';
import { featuredData } from '../../../../constants/HomeData'
import { Link } from "react-router-dom";
function FeaturedProducts() {
    const [isShown, setIsShown] = useState(false);
  return (
    <div className='trendSection'>
    <div className='container'>
        <div className='row'>
            { featuredData && featuredData.map((item,index) => (
                <div className='col-lg-3 col-md-6 col-12'>
                <div className='trend-card'>
                    <div>
                      <div className='image-hover' 
                       onMouseEnter={() => setIsShown(true)}
                       onMouseLeave={() => setIsShown(false)}
                      >
                        <img src={item.image} />
                        {isShown && ( 
                        <div className='hover-bg'>
                         <img src="images/bag-icn.svg"/>
                         <img src="images/lick-icon.svg"/>
                         <img src="images/share-icn.svg"/>
                        </div>
                        )}
                    </div>
            
                    </div>
                    <h6>{item.name}</h6>
                    <div className='d-flex justify-content-center align-items-baseline'><p>{item.price}</p><span>{item.realPrice}</span></div>
                    <ul className='size-box'>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                </div>
                </div>
            ))}
           
        </div>
        <Link to="/product"className='view-but'>VIEW all</Link>
    </div>
</div>
  )
}

export default FeaturedProducts