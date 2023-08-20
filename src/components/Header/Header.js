import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultModal from '../DefaultModal/DefaultModal';
import Searchbar from '../Searchbar/Searchbar'
import List from "../Searchbar/List";
function Header() {

  const [value, setValue] = useState("");
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
        <></>
        <div style={{ border:"1px solid rgb(139, 139, 163)",backgroundColor:"#F5F5F5"}}>
        <Searchbar
            value={value}
            setValue={(e) => setValue(e.target.value)}
            placeholder="Search"
            fontSize="12px"
            backgroundColor="#F5F5F5"
            borderRadius="4px"
            searchIcon
            width="205px"
            height="40px"
            position="relative"
            padding="0px 20px"

          />
          <List input={value} />
        </div>
      </DefaultModal>
    </div>
  )
}

export default Header