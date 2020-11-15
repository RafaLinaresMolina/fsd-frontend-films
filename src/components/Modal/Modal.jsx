import { Button, createTheme, Project, ThemeProvider, Words } from "arwes";
import React, { useCallback, useEffect } from "react";
import "./Modal.scss";
import CloseIcon from 'mdi-react/CloseIcon';

function Modal(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      props.handleClose();
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className={showHideClassName}>
      <ThemeProvider theme={createTheme(props.theme)}>
        <section className="modal-main">
          <Project animate header={props.title} icon={props.icon}>
            {(anim) => (
              <>
                <div animate show={anim.entered} className="modal-body">
                  {props.children}
                </div>
                <div className="modal-footer">
                  <Button onClick={props.handleClose}>
                    <span role="img" aria-label="Cancel Order">
                      < CloseIcon className="verticalAlignIcons"/> Close
                    </span>
                  </Button>
                </div>
              </>
            )}
          </Project>
        </section>
      </ThemeProvider>
    </div>
  );
}

export default Modal;
