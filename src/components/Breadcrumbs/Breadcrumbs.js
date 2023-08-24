import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  height,
  space,
  color,
  border,
  typography,
  layout,
  flexbox,
  grid,
} from "styled-system";
import Box from "../Box";
import Label from "../Label";

const Container = styled(Box)`
  display: flex;
  align-items: baseline;
  ${height}
  ${space}
  ${color}
  ${border}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
`;
const Links = styled(Box)`
  text-decoration: none;
  &:hover {
    text-decoration: unset;
  }
`;

const Breadcrumbs = ({ dataList, ...rest }) => {
  const handleClick = (link) => {
    window.location.href = link;
  }

  if (dataList && dataList.length > 0) {
    return (
      <Container {...rest}>
        {dataList.map((item, index) => (
          <Box display="flex" alignItems="baseline">
            <Links onClick={() => handleClick(item.link)}>
              <Label fontSize="22px" color={item.color || "1a1a1a"} fontWeight={item.isBold && 600} text={item.label} {...rest} />
            </Links>
            {dataList.length !== index + 1 && (
              <Box mx="15px" color="#222" fontSize="20px" fontWeight={600}>
                {" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </Box>
            )}
          </Box>
        ))}
      </Container>
    );
  }
  return null;
};

Breadcrumbs.propTypes = {
  dataList: PropTypes.array,
};

Breadcrumbs.defaultProps = {
  dataList: [],
};

export default Breadcrumbs;
