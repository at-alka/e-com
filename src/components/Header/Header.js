import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultModal from '../DefaultModal/DefaultModal';
function Header() {

  const [show, setShow] = useState(false);

  return (
    <div className='header-sec'>
     <div className='top-header'>
       <p>Welcome to Our Store Hiscraves</p>
       <div><a href="tel:123-456-7890"><img src="images/call-icon.svg"/>Call Us: 1234567890</a></div>
     </div>
      <div className='bottom-header'>
       <div className="toggle-icn" onClick={() => setShow(true)}>
        <img src="images/toggle.svg"/>
      </div>
      <div>
        <Link to="/">Logo here</Link>
      </div>
      <div className='icon-margin'>
      <img src="images/search-icon.svg"/>
      <img src="images/heart-icon.svg"/>
      <img src="images/bag-icon.svg"/>
      <img src="images/profile-icon.svg"/>

      </div>
     </div>
     <DefaultModal
        show={show}
        onHide={() => setShow(false)}
        className="menu-sidebaar"
        style={{ paddingRight: "0px" }}
        centered={false}
        showHeader={false}
        size=""
        showFooter={false}
      >
        <div onClick={() => setShow(false)}>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </DefaultModal>
    </div>
  )
}

export default Header