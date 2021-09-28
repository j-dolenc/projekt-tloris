import { Fragment, useState } from "react";

import Login from "../components/UI/Login";

import classes from "./Modal.module.css";

const TrueModal: React.FC  = (props) => {
  const [showModal, setShowModal] = useState(true);
  const onBackdropClick = () => {
    setShowModal(false);
  };
  const modal = (
    <div>
      <div className={classes.backdrop} onClick={onBackdropClick}></div>
      <div className={classes.modal}>
        <div className={classes.content}>
          {props.children}
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
export default TrueModal;
