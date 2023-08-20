import React from 'react'
import Banner from './component/Banner'
import ClothesWear from './component/ClothesWear'
import NewOffer from './component/NewOffer'
import TrendingCard from './component/TrendingCard'
import FeaturedProducts from './component/FeaturedProducts'
import StreetwearCard from './component/StreetwearCard'
import HurryUpCard from './component/HurryUpCard'
import PaymentSection from './component/PaymentSection'
import SubscribeForm from './component/SubscribeForm'


function HomePage() {
  return (
    <div>
      {/* 1st-section */}
      <Banner />
      {/* 1st-section-end */}
      {/* 2nd-section */}
      <ClothesWear />
       {/* 2nd-section-end */}
        {/* 3rd-section */}
      <NewOffer />
       {/* 3d-section-end */}

        {/* 4rth-section */}
      <div className='container'>
      <div className='headings'>
        <div className='custom-border'></div>
        <h2>Trending T-Shirts</h2>
        <TrendingCard/>
      </div>
      </div>
       {/* 4rth-section-end */}

        {/* 5th-section */}
      <div className='container'>
      <div className='headings'>
      <div className='custom-border'></div>
        <h2>Featured Products</h2>
        <FeaturedProducts />
      </div>
      </div>
       {/* 5th-section-end */}

        {/* 6ix-section */}
      <div className='fashion-banner'>
        <img src="images/fashion-banner.svg"/>
      </div>
       {/* 6ix-section-end */}

        {/* 7th-section */}
      <div className='container'>
      <div className='headings'>
      <div className='custom-border'></div>
        <h2>New Products</h2>
        <FeaturedProducts />
      </div>
      </div>
       {/* 7th-section-end */}

        {/* 8th-section */}
      <div className='container'>
      <div className='headings'>
      <div className='custom-border'></div>
        <h2>Best Selling Products</h2>
        <FeaturedProducts />
      </div>
      </div>
       {/* 8th-section-end */}
      {/* 9th-section */}
       <StreetwearCard/>
         {/* 9th-section-end */}
        {/*start */}
         <div className='fashion-banner'>
        <img src="images/loose-fit.svg"/>
      </div>
      {/* end */}
      {/* start */}
      <HurryUpCard />
      {/* end */}
      <PaymentSection/>
      <SubscribeForm />
    </div>
  )
}

export default HomePage