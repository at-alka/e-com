import React from 'react'

function PaymentSection() {
  return (
    <div className='paymentMode'>
        <img src="images/right-side.svg" className='leftIm'/>
      <div className='container'>
        <div className='row payment-mobile'>
          <div className='col-lg-3 col-md-3 col-6 border-right'>
             <img src="images/days.svg"/>
             <h6>7 Days Return</h6>
          </div>
          <div className='col-lg-3 col-md-3 col-6 border-right'>
             <img src="images/QualityProducts.svg"/>
             <h6>Quality Products</h6>
          </div>
          <div className='col-lg-3 col-md-3 col-6 border-right'>
             <img src="images/Safe-Payment.svg"/>
             <h6>Safe Payment</h6>
          </div>
          <div className='col-lg-3 col-md-3 col-6'>
             <img src="images/Helpline.svg"/>
             <h6>24x7 Helpline</h6>
          </div>
        </div>
      </div>
      <img src="images/left-side.svg" className='rightIm'/>
    </div>
  )
}

export default PaymentSection