/* eslint-disable import/order */
import React from "react";
import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components";
import { space, position, system, color, border, layout } from "styled-system";
import { getThemeColor } from "../../util/styledComponent";
import useHover from "../../customHooks/useHover";


import { ReactComponent as QuestionMark } from "./question-mark.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import { ReactComponent as Theme } from "./theme.svg";


// Always keep this list alphabetically sorted
export const iconMap = {
  theme: Theme,
  close: CloseIcon,  
  search: Search,

};

const iconSizeMap = {
  xl: "76px",
  "2large": "60px",
  large: "42px",
  normal: "36px",
  small: "24px",
  xs: "19px",
  "2xs": "16px",
  tiny: "13px",
  "2tiny": "10px",
};

const StyledIcon = styled.div`
  height: ${(props) => iconSizeMap[props.iconSize]};
  width: ${(props) => iconSizeMap[props.iconSize]};
  cursor: ${(props) => (props.onClick ? "pointer" : null)};
  display: flex;

  & > svg {
    transform: ${(props) => props.svgTransform ?? "none"};
  }

  ${space}
  ${position}
  ${layout}
  ${color}
  ${border}

  ${system({
    transform: {
      property: "transform",
    },
    cursor: {
      property: "cursor",
    },
  })}
`;

// IconSize is predefined sizes

const IconWrapper = ({
  iconName,
  onClick,
  iconSize,
  noWrapper,
  stroke,
  hoverColor,
  ...rest
}) => {
  const theme = useTheme();

  const [ref, isIconHovered] = useHover();

  const IconSVG = iconMap[iconName] || QuestionMark;
  const iconProps = {};
  if (rest.color) {
    iconProps.fill = getThemeColor(
      theme,
      isIconHovered && hoverColor ? hoverColor : rest.color
    );
  }
  if (iconSize || rest.height) {
    iconProps.height = iconSizeMap[iconSize] || rest.height;
  }
  if (iconSize || rest.width) {
    iconProps.width = iconSizeMap[iconSize] || rest.width;
  }

  if (stroke) {
    iconProps.stroke = stroke;
  }

  if (rest.iconClass) {
    iconProps.className = rest.iconClass;
  }

  if (!noWrapper) {
    return (
      <>
        <StyledIcon {...rest} ref={ref} iconSize={iconSize} onClick={onClick}>
          <IconSVG {...iconProps} />
        </StyledIcon>
      </>
    );
  }
  return (
    <>
      <IconSVG {...rest} ref={ref} {...iconProps} onClick={onClick} />
    </>
  );
};

IconWrapper.propTypes = {
  onClick: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf([
    "xl",
    "2large",
    "large",
    "normal",
    "small",
    "xs",
    "2xs",
    "tiny",
    "2tiny",
  ]),
  noWrapper: PropTypes.bool,
  stroke: PropTypes.string,
};

IconWrapper.defaultProps = {
  noWrapper: false,
};

export default IconWrapper;
