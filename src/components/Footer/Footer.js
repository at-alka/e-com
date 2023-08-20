import React from 'react'

function Footer() {
  return (
    <div className='footer-sec'>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-12'>
            <div className='footer-content'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
              </p>
              <ul>
                <li><img src="images/facebook.svg"/></li>
                <li><img src="images/twiter.svg"/></li>
                <li><img src="images/insta.svg"/></li>
                <li><img src="images/linkdin.svg"/></li>
                <li><img src="images/print.svg"/></li>

              </ul>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-12'>
            <div className='footer-content'>
              <h6>ONLINE SHOPPING</h6>
             <p>
              Men’s T-Shirts</p>
              <p> Women’s Wear</p>
              <p>Winter Collections</p>
              <p>Hooded T-Shirts</p>
              <p>Streetwear Collections</p>
             
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-12'>
            <div className='footer-content'>
            <h6>ONLINE SHOPPING</h6>
            <p> About Us</p>
            <p> Terms & Conditions</p>
            <p> Shipping & Returns Policy</p>
            <p>Cancellation & Refund Policy</p>
            <p> Contact Us</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <div className='footer-content'>
             <h6>ONLINE SHOPPING</h6>
             <p className='d-flex'>
              <span><img src="images/map-icon.svg"/></span>Lorem Ipsum is simply dummy text of the
               printing and typesetting industry.</p>
               <p className='d-flex'><span><img src="images/bcall-icon.svg"/></span>Lorem Ipsum is simply dummy text of the
               printing and typesetting industry.</p>
               <p className='d-flex'><span><img src="images/mail-icon.svg"/></span>Email Us: info@yourmail.com</p>
            </div>
          </div>
        </div>
       </div>
       <div className='footer-bottom'>
        <p>©2022-23 Powered By dummy team</p>
       </div>
    </div>
  )
}

export default Footer