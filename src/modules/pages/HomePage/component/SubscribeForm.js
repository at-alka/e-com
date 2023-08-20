import React from 'react'

function SubscribeForm() {
  return (
    <div className='border-bottom'>
    <div className='container'>
        <div className='subscForm'>
          <img src="images/left-Vector.svg" className='left-vc'/>
            <h1>Subscribe to get updates on exciting offers
            <br/>& deals</h1>
            <div className='subsc-input'>
          <input
          
            type="text"
            placeholder="Enter email address"
            className="input-box"
          />
          <button>Subscribe</button>
          <img src="images/right-Vector.svg" className='right-vc'/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default SubscribeForm