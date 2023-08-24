import React, { useState } from 'react';

import CountryCode from './CountryCode';
import styled from "styled-components"

const Flexinput = styled.div`

  overflow:hidden;
  display:flex;
  width:${(props) => props.props.width};
  height: ${(props) => props.props.height ? props.props.height : "initial"};
  border:${(props) => props.border ? props.border : "0px solid #0003"};
  border-radius: 8px;
  box-sizing:content-box !important;

  h.login-input {
    widt:100%;
    border: none;
    border-left:none;
    padding-left:12px;
    outline: none;
    font-size:14px;
    box-sizing:content-box !important;
    padding:10px;
    text-align:${(props) => props.textAlign ? props.textAlign : "start"}
  }

  .icon {
    width:16px;
    box-sizing:content-box !important;
    padding:13px;
    background-color:${(props) => props.props.iconBgcolor}
  }

  .search {
    background-color:red;
    fill:red;

  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`

const Input = (props) => {
  const {value, countryCodes = null, icon = null, iconBgcolor = "#C4C4C4", className, width = "100%", placeholder, type = "text", maxlength = "100", ...rest} = props
  return <Flexinput border={props.border} textAlign={props.textAlign} props={{...props, iconBgcolor, width}} className="flex">{ countryCodes ?(<CountryCode countryCode={props.countryCode} setCountryCode={props.setCountryCode}/>):null}
          {icon !== null ? <img className="icon" src={icon} alt="icon"/> : null}
          <input value={value} maxLength={maxlength} onChange={props.onChange} type={type} className={props.className} placeholder={placeholder}/>
        </Flexinput>
}


export default Input
