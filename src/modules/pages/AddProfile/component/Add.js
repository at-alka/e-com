import React, { useState, useEffect } from "react";
import Input from '../../../../components/Input/Input'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import Box from "../../../../components/Box";
import UploadFile from "../../../../components/UplodeFile/UploadFile";
import { useLocation } from 'react-router-dom';
function Add() {
  const initialValues = {
    name:"",
    email: "",
    dob: "",
    country: "",
    avatar: "",
    id:"",
  };
  const [formValues, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [file, setFile] = useState()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  console.log(id,"id")

  let dataList = [
    { label: "Profle", link: `/`, isBold: true, color: "#222" },
    { label: `add`, link: "/add", isBold: true, color: "#7E7E7E" },
  ];
  const handleChange = (keyName, keyValue) => {
    let data = { ...formValues }
    data[keyName] = keyValue
    setFormValue(data);
  }

  const handleSubmit = (e) => {
    if (formValues.id){
      fetch('http://localhost:3004/list/' + formValues.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues)
    }).then(response => console.log(response.json()))
    }
    else {
    let check = validate(formValues);
    if (check.validate ) {
    fetch('http://localhost:3004/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues)
    }).then(response => console.log(response.json()))
  } else {
    setFormErrors(check.errors)
   }
  }
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])
  const validate = (values) => {
    let isValid = true;
    const errors = {}
    if (!values.name) {
      isValid = false;
      errors.name = "name is required"
    }
    if (!values.email) {
      isValid = false;
      errors.email = "useremail is required"
    }
    if (!values.dob) {
      isValid = false;
      errors.dob = "dob is required"
    }
    if (!values.country) {
      isValid = false;
      errors.country = "phone number is required"
    }
    return {
      isValid,
      errors
    }
  }


  function handleFile(event){
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }
  function handleUpload(){
    const formData = FormData()
    formData.append('file', file)
    fetch(
      'http://localhost:3004/list',
      {
        method:"POST",
        body: FormData
      }
    ).then((response) => response.json())
    .then(
      (result) => {
        console.log ('success', result)
      }
    )
    .catch(error =>{
      console.error("Error:", error)
    })
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
          <div className="profile" onSubmit={handleUpload}>
          <img src="images/Profile-Avatar.png"/>
            <input type="file" name="file" 
            // onChange={handleFile}
            fileName={formValues?.avatar}
            onChange={(e) => handleChange("avatar", e.target.value)} 
            />
            
            {/* <UploadFile
                id="person"
                onChange={(e) => handleChange("avatar", e.target.value)} 
                fileName={formValues?.avatar}
                bg="#fff"
                height="66px"
            /> */}
            {/* <img src="images/Profile-Avatar.png"/>
          <div onClick={() => handleClickUpload()}><i className="fa fa-camera" aria-hidden="true"></i></div> */}
          </div>
          <div className="mt-4">
            <label> Name </label>
            <input
              key={formValues._id}
              value={formValues.name}
              onChange={(e) => handleChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
              className="input-box"
            />
            <span>{formErrors.name}</span>
          </div>
          <div className="mt-4">
            <label>
              Email
            </label>
            <input
             key={formValues._id}
              value={formValues.email}
              onChange={(e) => handleChange("email", e.target.value)}
              type="email"
              placeholder="Enter name"
              className="input-box"
            />
            <span>{formErrors.email}</span>
          </div>
          <div className="mt-4">
            <label> Country Codes</label>
            <select
             key={formValues._id}
              className="input-box" id="country" name="country"
              value={formValues.country}
              onChange={(e) => handleChange("country", e.target.value)}
            >
              <option value="">country</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Heard Island and Mcdonald Islands">Heard Island and McDonald Islands</option>
              <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
            </select>
            <span>{formErrors.country}</span>
          </div>
          <div className="mt-4">
            <label> DOB</label>
            <input
             key={formValues._id}
              value={formValues.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              placeholder="785-785-4644"
              className="input-box"
              type="date"
            />
            <span>{formErrors.dob}</span>
          </div>
          <button className='view-but' onClick={(e) => handleSubmit(e)}>Save Details</button>
        </div>
      </div>
    </div>
  )
}

export default Add