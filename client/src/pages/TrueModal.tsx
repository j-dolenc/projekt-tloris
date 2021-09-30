
import { Fragment, useState } from "react";
import AddProject from "../components/projects/AddProject";



import classes from "./Modal.module.css";

const TrueModal = () => {
  const [showModal, setShowModal] = useState(true);
  const onBackdropClick = () => {
    setShowModal(false);
  };
  const modal = (
    <div>
      <div className={classes.backdrop} onClick={onBackdropClick}></div>
      <div className={classes.modal}>
        <div className={classes.content}>
          <AddProject onCancelClick={onBackdropClick} />
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