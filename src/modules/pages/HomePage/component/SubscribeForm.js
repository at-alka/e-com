import React from 'react'

function SubscribeForm() {
  return (
    <div className='container'>
        <div className='subscForm'>
            <h1>Subscribe to get updates on exciting offers
            & deals</h1>
            <label>
            Email Address<span style={{ color: "#FE1717" }}>*</span>
          </label>
          <input
            value={changeProfile?.contact_email}
            type="text"
            placeholder="Enter email address"
            className="input-box"
          />
        </div>
    </div>
  )
}

export default SubscribeForm