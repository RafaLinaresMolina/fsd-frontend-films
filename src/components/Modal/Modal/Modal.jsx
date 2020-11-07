import React from "react";
import "./Modal.scss";

function Modal(props){

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  const headerModal = {
    0: "modal-error",
    1: "modal-warning",
    2: "modal-ok",
    3: "modal-default",
  };

  const classes = `modal-header ${headerModal[props.header]}`;

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className={classes}>
        <div className={"redButton"} onClick={props.handleClose}>
                  {" "}
                  <span role="img" aria-label="Cancel Order">
                    &#10060;
                  </span>{" "}
                </div>
          <div className="modal-title">{props.title}</div>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer"></div>
      </section>
    </div>
  )

}

export default Modal;