import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {
  space,
  color,
  border,
  typography,
  height,
  layout,
  flexbox,
  system,
  variant,
  grid,
} from "styled-system";
import theme from "../../theme";
import Box from "../Box";

const StyledContainer = styled.p`
  ${variant({
    variants: {
      text1: {
        fontSize: theme.fontSizes.xl,
        fontWeight: theme.fontWeights.bold,
      },
      text2: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeights.bold,
      },
      text3: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeights.normal,
      },
      text4: {
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.bold,
      },
      text5: {
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.normal,
      },
      text6: {
        fontSize: theme.fontSizes.sm,
        fontWeight: theme.fontWeights.bold,
      },
      text7: {
        fontSize: theme.fontSizes.sm,
        fontWeight: theme.fontWeights.normal,
      },
      text8: {
        fontSize: theme.fontSizes.xs,
        fontWeight: theme.fontWeights.normal,
      },
    },
  })}

  display: flex;
  user-select: ${(props) => (props.noSelect ? "none" : "auto")};
  margin-bottom: 0;
  cursor: ${(props) => props.onClick && "pointer"};
  white-space: pre-wrap;
  ${height}
  ${space}
  ${color}
  ${border}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${system({
    wordBreak: {
      property: "word-break",
    },
    cursor: {
      property: "cursor",
    },
    textDecoration: {
      property: "textDecoration",
    },
    whiteSpace: {
      property: "white-space",
    },
    textOverflow: {
      property: "text-overflow",
    },
    textTransform: {
      property: "text-transform",
    },
  })}
`;

// eslint-disable-next-line no-shadow
const Label = ({ noSelect, children, variant, isMandatory, mandatoryText, ...rest }) => (
  <StyledContainer variant={variant} {...rest}>
    {children || rest.text}
    {isMandatory && <Box color="#EC3737" mx="5px">*</Box>}
    {mandatoryText && <Box color="#EC3737">{mandatoryText}</Box>}
  </StyledContainer>
);

Label.propTypes = {
  noSelect: PropTypes.bool,
  variant: PropTypes.oneOf([
    "text1", // Text 1 - 22/600
    "text2", // Text 2 - 18/600
    "text3", // Text 3 - 18/400
    "text4", // Text 4 - 16/600
    "text5", // Text 5 - 16/400
    "text6", // Text 6 - 14/600
    "text7", // Text 7 - 14/400
    "text8", // Text 8 - 12/400
  ]),
};

Label.defaultProps = {
  color: "#222222",
  fontStyle: "normal",
  noSelect: true,
  variant: "text5",
  isMandatory: false
};

export default Label;
