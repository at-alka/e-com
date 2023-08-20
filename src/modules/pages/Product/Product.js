import React from 'react'
import TrendingCard from '../HomePage/component/TrendingCard'
import { useParams } from 'react-router-dom'
import { featuredData, trendData, clothesData } from '../../../constants/HomeData'

function Product() {

  const {productType, productId} = useParams()

  console.log(productType, productId)
  return (
    <div>
     <div className='container'>
      <div className='headings'>
        <div className='custom-border'></div>
        <h2>Product Page</h2>
        <div>
        {productType && productId && <div>
              {
                productType == 'featuredData' ? <div className='product-card'>
                    {/* {featuredData[productId].name} */}
                    <div className='d-flex'>
                    <img src={featuredData[productId].image} alt="" />
                    <div className='productP'>
                    <h6>{featuredData[productId].name}</h6>
                    <div className='d-flex align-items-baseline'>
                      <p>{featuredData[productId].price}</p><span>{featuredData[productId].realPrice}</span></div>
                    <ul className='size-box'>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                    </div>
               </div>
                </div> 
                :
                productType == 'trendData' ? <div className='product-card'>
                {/* {trendData[productId].name} */}
                <div className='d-flex'>
                  <img src={trendData[productId].image} alt="" />
                  <div className='productP'>
                  <h6>{trendData[productId].name}</h6>
                    <div className='d-flex align-items-baseline'>
                      <p>{trendData[productId].price}</p><span>{trendData[productId].realPrice}</span></div>
                    <ul className='size-box'>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                  </div>
               </div>
                </div> 
                :
                productType == 'clothesData' ? <div className='product-card'>
                {/* {clothesData[productId].name} */}
                 <div className='d-flex'> 
                 <img src={clothesData[productId].image} alt="" />
                 <div className='productP'>
                 <h6>{clothesData[productId].name}</h6>
                    <div className='d-flex align-items-baseline'>
                      <p>{clothesData[productId].price}</p><span>{clothesData[productId].realPrice}</span></div>
                    <ul className='size-box'>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                 </div>
                  
                    </div>
                </div> 
                :
                null
              }
          </div>}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product
