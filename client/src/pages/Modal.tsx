
import { Fragment, useState } from "react";

import Login from "../components/UI/Login";

import classes from "./Modal.module.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const onBackdropClick = () => {
    setShowModal(false);
  };
  const modal = (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className={classes.content}>
          <Login onCancelClick={onBackdropClick}/>
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      {showModal && modal}
    </Fragment>
  );
};
export default Modal;
