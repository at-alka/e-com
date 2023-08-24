import React, { useState, useEffect } from "react";
import Input from '../../../../components/Input/Input'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import Box from "../../../../components/Box";
import UploadFile from "../../../../components/UplodeFile/UploadFile";

function Edit() {
  const initialValues = {
    username: "",
    email: "",
    dob: "",
    country_code: "",
    profile_pic: ""
  };
  const [formValues, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  let dataList = [
    { label: "Profle", link: `/`, isBold: true, color: "#222" },
    { label: `Edit`, link: "/edit", isBold: true, color: "#7E7E7E" },
  ];
  const handleChange = (keyName, keyValue) => {
    let data = { ...formValues }
    data[keyName] = keyValue
    setFormValue(data);
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    // let temp = []
    let check = validate(formValues);

    fetch('http://localhost:3004/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues)
    }).then(response => console.log(response.json()))

  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])
  const validate = (values) => {
    let isValid = true;
    const errors = {}
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      isValid = false;
      errors.username = "username is required"
    }
    if (!values.email) {
      isValid = false;
      errors.email = "useremail is required"
    }
    if (!values.dob) {
      isValid = false;
      errors.dob = "dob is required"
    }
    if (!values.country_code) {
      isValid = false;
      errors.country_code = "phone number is required"
    }
    return {
      isValid,
      errors
    }
  }



  return (
    <div className='add-form'>
      <div className="container">
        <Box borderRadius="4px" color="#FFFFFF" px="30px" py="10px">
          <Breadcrumbs
            dataList={dataList}
          />
        </Box>
        <div className="col-lg-8 mx-auto bg-color">
          <div className="profile">
            {/* <UploadFile
                id="person"
                onChange={(e) => handleChange("profile_pic", e.target.value)} 
                fileName={formValues?.profile_pic}
                bg="#fff"
                height="66px"
            /> */}
            {/* <img src="images/Profile-Avatar.png"/>
          <div onClick={() => handleClickUpload()}><i className="fa fa-camera" aria-hidden="true"></i></div> */}
          </div>
          <div className="mt-4">
            <label> Name </label>
            <input
              value={formValues.username}
              //  onChange={handleChange}
              onChange={(e) => handleChange("username", e.target.value)}
              type="text"
              placeholder="Enter name"
              className="input-box"
            />
            <p>{formErrors.username}</p>
          </div>
          <div className="mt-4">
            <label>
              Email
            </label>
            <input
              value={formValues.email}
              onChange={(e) => handleChange("email", e.target.value)}
              type="email"
              placeholder="Enter name"
              className="input-box"
            />
            <p>{formErrors.email}</p>
          </div>
          <div className="mt-4">
            <label> Country Codes</label>
            <select
              className="input-box" id="country" name="country"
              value={formValues.country_code}
              onChange={(e) => handleChange("country_code", e.target.value)}
            >
              <option value="">country</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Heard Island and Mcdonald Islands">Heard Island and McDonald Islands</option>
              <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
            </select>
            <p>{formErrors.country_code}</p>
          </div>
          <div className="mt-4">
            <label> DOB</label>
            <input
              value={formValues.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              placeholder="785-785-4644"
              className="input-box"
              type="date"
            />
            <p>{formErrors.dob}</p>
          </div>
          <button className='view-but' onClick={(e) => handleSubmit(e)}>Save Details</button>
        </div>
      </div>
    </div>
  )
}

export default Edit