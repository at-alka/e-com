import React, { useEffect, useRef, useState } from "react";
import {
  border,
  color,
  flexbox,
  layout,
  maxHeight,
  height,
  space,
  system,
  typography,
} from "styled-system";

import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 20.5px;
  ${maxHeight}
  ${height}
  ${space}
  ${border}
  ${typography}
  ${layout}
  ${color}
  ${flexbox}
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 20.5px;
  font-weight: 400;
  outline: none;
  padding: 0;
 
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ${color}
    ${typography}
  }

  ${system({
    wordBreak: {
      property: "word-break",
    },
  })}
  ${system({
    resize: {
      property: "resize",
    },
  })}
  ${space}
  ${border}
  ${typography}
  ${layout}
  ${color}
  ${flexbox}
`;

const Searchbar = ({
  value,
  placeholder,
  setValue,
  textCount,
  inputProps,
  resetTextAreaHeight,
  allowedKeys = /[^0-9A-Za-z _-]/g,
  searchIcon,
  searchIconPositionLeft,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [textAreaHeight, setTextAreaHeight] = useState("auto");

  useEffect(() => {
    if (inputProps?.as === "textarea") {
      setTextAreaHeight(inputRef?.current.scrollHeight);
    }
  }, [inputRef?.current]);

  useEffect(() => {
    if (resetTextAreaHeight) setTextAreaHeight("18px");
  }, [resetTextAreaHeight]);

  const isKeyAllowed = (str) => {
    if (allowedKeys === "all") {
      return true;
    }
    return !new RegExp(allowedKeys).test(str);
  };

  const handleChange = (e) => {
    if (textCount && textCount.show && textCount.maxCharCount) {
      if (
        e.target.value.length <= textCount.maxCharCount &&
        isKeyAllowed(e.target.value)
      ) {
        setValue(e);
        // handle textarea height
        if (
          inputProps?.as === "textarea" &&
          textAreaHeight !== inputRef?.current.scrollHeight
        ) {
          setTextAreaHeight(inputRef?.current.scrollHeight + 20);
        }
      }
    } else {
      if (isKeyAllowed(e.target.value)) setValue(e);
    }
  };

  return (
    <Container {...rest}>
      {searchIcon && (
        searchIconPositionLeft ?
          <Icon iconSize="xs" iconName="search" color="#7E7E7E" position="absolute" left="10px"/>
          :
          <Icon iconSize="xs" iconName="search" color="#7E7E7E" position="absolute" left="10px"/>
      )}
      <StyledInput
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        height={textAreaHeight}
        ml={searchIconPositionLeft && "10px"}
        fontSize={16}
        {...inputProps}
        {...rest}
      />
    </Container>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  border: PropTypes.string,
  bg: PropTypes.string,
  height: PropTypes.string,
  searchIcon: PropTypes.bool,
  handleChange: PropTypes.func,
  textCount: PropTypes.shape({
    show: PropTypes.bool,
    maxCharCount: PropTypes.number,
  }),
  allowedKeys: PropTypes.string,
  inputProps: PropTypes.object,
  resetTextAreaHeight: PropTypes.bool,
};

export default Searchbar;
