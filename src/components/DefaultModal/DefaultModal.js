import { Button, Modal } from "react-bootstrap";

import PropTypes from "prop-types";
import React from "react";

function DefaultModal({
  show,
  size,
  centered,
  title,
  onHide,
  children,
  handleBtnClick,
  className,
  showHeader,
  showFooter,
  fullScreen,
}) {
  return (
    <Modal
      show={show}
      size={size}
      centered={centered}
      onHide={() => onHide()}
      className={className}
      fullscreen={fullScreen}
    >
      {showHeader && (
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
      {showFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleBtnClick("left")}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleBtnClick("right")}>
            OK
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}
DefaultModal.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.string,
  centered: PropTypes.bool,
  title: PropTypes.string,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  handleBtnClick: PropTypes.func,
  className: PropTypes.string,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  fullScreen: PropTypes.bool,
};
DefaultModal.defaultProps = {
  size: "sm", // [lg, sm]
  centered: true,
  title: "",
  handleBtnClick: undefined,
  className: "",
  showHeader: true,
  showFooter: true,
  fullScreen: false,
};
export default DefaultModal;
