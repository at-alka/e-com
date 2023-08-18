import React from 'react'

function HurryUpCard() {
  return (
    <div className='hurryUp'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                   <div className='hurryCard'>
                     <img src="images/diamond.svg"/>
                      <h5>Hurry Up!</h5>
                      <h1>85% OFF</h1>
                      <h5>Sale</h5>
                      <button>shop now</button>
                   </div>
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                <div className='hurryCard hurryCard-two'>
                  <img src="images/discount.svg"/>
                  <h5>Hurry Up!</h5>
                      <h1>85% OFF</h1>
                      <h5>Sale</h5>
                      <button>shop now</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HurryUpCard