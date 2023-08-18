import React from 'react'
import ClothesWear from '../HomePage/component/ClothesWear'
import TrendingCard from '../HomePage/component/TrendingCard'

function ProductPage() {
  return (
    <div>
     <div className='container'>
      <div className='headings'>
        <div className='custom-border'></div>
        <h2>Trending T-Shirts</h2>
        <TrendingCard/>
      </div>
      </div>
    </div>
  )
}

export default ProductPage