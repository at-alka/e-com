import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { border, color, layout, space } from "styled-system";
import Label from "../Label";
import Icon from "../Icon";
import Box from "../Box";

const UploadFileBody = styled(Box)`
  box-sizing: border-box;
  background: #004c73;
  border: 1px solid #016da5;
  border-radius: 50px;
  color: #ffffff;
  align-items: center;
  display: flex;
  padding-left: 65px;
  position: relative;
  ${layout}
  ${border}
  ${color}
  ${space}
`;
const ChooseFile = styled(Box)`
  width: 22.4% !important;
  min-width: max-content;
  height: 40px;
  left: 0px;
  position: absolute;
  background: #f15a25 !important;
  border: 1px solid #f15a25 !important;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -2px;
  ${layout}
  ${border}
  ${color}
  ${space}
`;
const ChooseLabel = styled(Label)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.015em;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 1350px) {
    font-size: 12px;
  }
`;
const UploadFileItem = styled(Box)`
  position: absolute;
  right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 73%;
`;
const UploadFile = ({ onOptionClick, ...rest }) => {
  const [fileName, setFileName] = useState();
  const [fileLink, setFileLinkName] = useState();

  const inputHandle = () => {
    document.querySelector(".input-handle").click();
  };

  const clearHandle = () => {
    setFileName(null);
    setFileLinkName(null);
  };

  const updateData = (files) => {
    files[0] && setFileName(files[0].name);
    if (files) {
      setFileLinkName(URL.createObjectURL(files[0]));
    }
    onOptionClick(files[0].name, URL.createObjectURL(files[0]));
  }

  return (
    <UploadFileBody {...rest}>
      <ChooseFile {...rest} onClick={() => inputHandle()}>
        <Icon iconName="export" color="#ffffff" mb="5px" />
        <ChooseLabel color="#fff" ml="3px">Choose file</ChooseLabel>
      </ChooseFile>
      <input
        hidden
        className="input-handle"
        type="file"
        onChange={({ target: { files } }) => updateData(files)}
        {...rest}
      />
      <UploadFileItem>
        {fileName ? (
          <ChooseLabel>{fileName}</ChooseLabel>
        ) : (
          <ChooseLabel>No File Chosen</ChooseLabel>
        )}
        {fileName && <Icon
          iconName="close"
          color="#ffffff"
          iconSize="tiny"
          onClick={clearHandle}
        />}
      </UploadFileItem>
    </UploadFileBody>
  );
};

UploadFile.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
};

export default UploadFile;
